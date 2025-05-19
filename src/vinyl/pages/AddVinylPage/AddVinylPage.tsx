import VinylForm from "../../components/VinylForm/VinylForm";
import useVinyls from "../../hooks/useVinyls";
import "./AddVinylPage.css";

const AddVinylPage: React.FC = () => {
  const { addNewVinyl } = useVinyls();

  return (
    <>
      <h1 className="page-addtitle">Añade un vinilo</h1>
      <VinylForm action={addNewVinyl} />
    </>
  );
};

export default AddVinylPage;
