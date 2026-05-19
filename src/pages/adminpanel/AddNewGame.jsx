import { useState, useEffect } from "react";
import ProductForm from "../../components/ProductForm";
import useProducts from "../../hooks/useProducts";

function AddNewGame() {
  useEffect(() => {
    document.title = "Admin | Add new Game";
  }, []);

  const buttonText = "Add Game";

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
      setGameData({
        ...gameData,
        [name]: URL.createObjectURL(files[0]),
      });
    } else if (selectedOptions) {
      const values = Array.from(selectedOptions).map((opt) => opt.value);
      setGameData({
        ...gameData,
        [name]: values,
      });
    } else {
      setGameData({
        ...gameData,
        [name]: value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (window.confirm("Are you sure you want to add Game")) {
      await createProduct(gameData);
      alert(
        `${gameData.name} Genre: ${gameData.gamegenre} Has been added succesfully`,
      );
    }
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
