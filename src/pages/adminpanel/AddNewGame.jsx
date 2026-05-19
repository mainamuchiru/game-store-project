import { useState } from "react";
import ProductForm from "../../components/ProductForm";
import useProducts from "../../hooks/useProducts";

function AddNewGame() {
  const { createProduct } = useProducts();
  const [gameData, setGameData] = useState({
    name: "",
    description: "",
    releasedate: "",
    gamegenre: "",
    platform: "",
    image: "",
    imageurl: "",
    price: "",
    learnmore: "",
  });

  function handleChange(e) {
    const { name, value, files } = e.target;

    setGameData({
      ...gameData,
      [name]: files ? URL.createObjectURL(files[0]) : value,
    });
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
    />
  );
}

export default AddNewGame;
