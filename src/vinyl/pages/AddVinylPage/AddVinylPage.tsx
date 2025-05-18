import VinylForm from "../../components/VinylForm/VinylForm";
import "./AddVinylPage.css";

const AddVinylPage: React.FC = () => {
  return (
    <>
      <h1 className="page-addtitle">Añade un vinilo</h1>
      <VinylForm />
    </>
  );
};

export default AddVinylPage;
