import { useState } from "react";
import ProductForm from "../../components/ProductForm";
import useProducts from "../../hooks/useProducts";

function AddNewGame() {
  const buttonText = "Add Game"
  const { createProduct } = useProducts();
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    releasedate: "",
    gamegenre: [],
    platform: [],
    image: "",
    imageurl: "",
    price: "",
    learnmore: "",
  });

  function handleChange(e) {
    const { name, value, files, selectedOptions } = e.target;

    if (files) {
      // File input
      setGameData({
        ...gameData,
        [name]: URL.createObjectURL(files[0]),
      });
    } else if (selectedOptions) {
      // Multi-select (gamegenre or platform)
      const values = Array.from(selectedOptions).map((opt) => opt.value);
      setGameData({
        ...gameData,
        [name]: values,
      });
    } else {
      // Regular input
      setGameData({
        ...gameData,
        [name]: value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    await createProduct(gameData);
    alert(
      `${gameData.name} Genre: ${gameData.gamegenre} Has been added succesfully`,
    );
  }

  return (
    <ProductForm
      products={gameData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      headerTitle={"Add New Game"}
      buttonText={"Add Game"}
    />
  );
}

export default AddNewGame;
