import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../../components/Button/Button";
import type { VinylFormData, VinylSendFormData } from "../../../types";
import { mapVinylFormDataToVinySend } from "../../dto/mapper";
import "./VinylForm.css";

interface VinylFormProps {
  addVinyl?: (vinyl: VinylSendFormData) => Promise<void>;
  updateVinyl?: (vinylId: string, vinyl: VinylSendFormData) => Promise<void>;
  vinylId?: string;
  exists?: boolean;
  initialVinylData: VinylFormData;
}

const VinylForm: React.FC<VinylFormProps> = ({
  addVinyl,
  updateVinyl,
  vinylId,
  exists,
  initialVinylData,
}) => {
  const [vinylData, setVinylData] = useState<VinylFormData>(initialVinylData);

  const changeVinylData = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const newValue = event.target.value;

    setVinylData((vinylData) => ({
      ...vinylData,
      [event.target.id]: newValue,
    }));
  };

  const changeStylesData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const stylesInput = event.target.value;

    const vinylStyles = stylesInput
      .replaceAll(/[.,;#|/]/g, "")
      .split(" ")
      .slice(0, 3)
      .join(", ");

    setVinylData((vinylData) => ({ ...vinylData, styles: vinylStyles }));
  };

  const checkboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVinylData((vinylData) => ({
      ...vinylData,
      [event.target.id]: event.target.checked,
    }));
  };

  const opacityClass = vinylData.isOwned ? "" : "--opacity";

  const isFormValid =
    vinylData.artist !== "" &&
    vinylData.title !== "" &&
    vinylData.country !== "" &&
    vinylData.releaseDate !== "" &&
    vinylData.genre !== "" &&
    vinylData.format !== "" &&
    vinylData.coverImageUrl !== "";

  const navigate = useNavigate();

  const onSubmitAddForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const newVinyl = mapVinylFormDataToVinySend(vinylData);

    await addVinyl!(newVinyl);
    navigate("/");
  };

  const onSubmitUpdateForm = async (
    event: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    const newVinyl = mapVinylFormDataToVinySend(vinylData);

    await updateVinyl!(vinylId!, newVinyl);
  };

  const onSubmit = exists ? onSubmitUpdateForm : onSubmitAddForm;

  const buttonText = exists ? "Guardar cambios" : "Añadir vinilo";

  return (
    <form onSubmit={onSubmit}>
      <div className="vinyl-form__group">
        <label htmlFor="title" className="vinyl-form__text">
          Título:
        </label>
        <input
          value={vinylData.title}
          onChange={changeVinylData}
          id="title"
          type="text"
          className="vinyl-form__control"
          required
        />
      </div>
      <div className="vinyl-form__group">
        <label htmlFor="artist" className="vinyl-form__text">
          Artista:
        </label>
        <input
          value={vinylData.artist}
          onChange={changeVinylData}
          id="artist"
          type="text"
          className="vinyl-form__control"
          required
        />
      </div>
      <div className="vinyl-form__row">
        <div className="vinyl-form__group">
          <label htmlFor="country" className="vinyl-form__text">
            País:
          </label>
          <input
            value={vinylData.country}
            onChange={changeVinylData}
            id="country"
            type="text"
            className="vinyl-form__control"
            required
          />
        </div>
        <div className="vinyl-form__group">
          <label htmlFor="genre" className="vinyl-form__text">
            Género:
          </label>
          <input
            value={vinylData.genre}
            onChange={changeVinylData}
            id="genre"
            type="text"
            className="vinyl-form__control"
            required
          />
        </div>
      </div>
      <div className="vinyl-form__row">
        <div className="vinyl-form__group">
          <label htmlFor="format" className="vinyl-form__text">
            Formato:
          </label>
          <select
            value={vinylData.format}
            onChange={changeVinylData}
            id="format"
            className="vinyl-form__control"
            required
          >
            <option value="" disabled>
              {}
            </option>
            <option value={"7''"}>7''</option>
            <option value={"12''"}>12''</option>
          </select>
        </div>
        <div className="vinyl-form__group">
          <label htmlFor="releaseDate" className="vinyl-form__text">
            Lanzamiento:
          </label>
          <input
            value={vinylData.releaseDate}
            onChange={changeVinylData}
            id="releaseDate"
            type="date"
            className="vinyl-form__control"
            required
          />
        </div>
      </div>
      <div className="vinyl-form__group">
        <label htmlFor="coverImageUrl" className="vinyl-form__text">
          Imagen URL:
        </label>
        <input
          value={vinylData.coverImageUrl}
          onChange={changeVinylData}
          id="coverImageUrl"
          type="url"
          className="vinyl-form__control"
          required
        />
      </div>
      <div className="vinyl-form__group">
        <div className="vinyl-form__optionals">
          <label htmlFor="styles" className="vinyl-form__text">
            Estilo:
          </label>
          <span className="vinyl-form__optionals-text">(Opcional, máx. 3)</span>
        </div>
        <input
          value={vinylData.styles}
          onChange={changeStylesData}
          id="styles"
          type="text"
          className="vinyl-form__control"
        />
      </div>
      <div className="vinyl-form__group">
        <div className="vinyl-form__optionals">
          <label htmlFor="notes" className="vinyl-form__text">
            Notas:
          </label>
          <span className="vinyl-form__optionals-text">
            (Opcional, máx. 250 caract.)
          </span>
        </div>
        <textarea
          value={vinylData.notes}
          onChange={changeVinylData}
          id="notes"
          maxLength={250}
          rows={5}
          className="vinyl-form__control"
        />
      </div>
      <div className={`vinyl-form__group vinyl-form__group${opacityClass}`}>
        <div className="vinyl-form__optionals">
          <label htmlFor="purchasedAt" className="vinyl-form__text">
            Comprado en:
          </label>
          <span className="vinyl-form__optionals-text">(Opcional)</span>
        </div>
        <input
          value={vinylData.purchasedAt}
          onChange={changeVinylData}
          id="purchasedAt"
          type="text"
          className="vinyl-form__control"
          disabled={!vinylData.isOwned}
        />
      </div>
      <div className="vinyl-form__checkbox-group">
        <label
          htmlFor="isOwned"
          className="vinyl-form__text  vinyl-form__text--checkbox "
        >
          Lo tengo:
        </label>
        <input
          checked={vinylData.isOwned}
          onChange={checkboxChange}
          id="isOwned"
          type="checkbox"
          className="vinyl-form__checkbox"
        />
      </div>
      <Button
        classNameModifier="form"
        action={() => {}}
        type="submit"
        disabled={!isFormValid}
      >
        {buttonText}
      </Button>
    </form>
  );
};

export default VinylForm;
