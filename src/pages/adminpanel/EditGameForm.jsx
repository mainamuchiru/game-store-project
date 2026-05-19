import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useProducts from "../../hooks/useProducts";
import ProductForm from "../../components/ProductForm";

function EditGameForm() {
  const buttonText = "Save Changes"
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, editProduct } = useProducts(); // ✅ get products array + editProduct

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

  // Load selected game from the products array
  useEffect(() => {
    const game = products.find((p) => String(p.id) === String(id));
    if (game) {
      setGameData(game);
    }
  }, [id, products]);

  // Handle form changes (multi-select support)
  function handleChange(e) {
    const { name, value, files, selectedOptions } = e.target;

    if (files) {
      setGameData((prev) => ({
        ...prev,
        [name]: URL.createObjectURL(files[0]),
      }));
    } else if (selectedOptions) {
      const values = Array.from(selectedOptions).map((opt) => opt.value);
      setGameData((prev) => ({
        ...prev,
        [name]: values,
      }));
    } else {
      setGameData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  // Submit update
  async function handleSubmit(e) {
    e.preventDefault();
    await editProduct(id, gameData);
    alert("Game updated successfully!");
    navigate("/adminpanel/editgame");
  }

  return (
    <ProductForm
      products={gameData}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      headerTitle={"Edit Game"}
      buttonText={"Save Changes"}
    />
  );
}

export default EditGameForm;