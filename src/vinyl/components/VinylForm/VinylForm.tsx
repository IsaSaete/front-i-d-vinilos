import Button from "../../../components/Button/Button";
import "./VinylForm.css";

const VinylForm: React.FC = () => {
  return (
    <form>
      <div className="vinyl-form__group">
        <label htmlFor="title" className="vinyl-form__text">
          Título:
        </label>
        <input
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
            id="country"
            type="text"
            className="vinyl-form__control"
            required
          />
        </div>
        <div className="vinyl-form__group">
          <label htmlFor="releaseDate" className="vinyl-form__text">
            Lanzamiento:
          </label>
          <input
            id="releaseDate"
            type="date"
            className="vinyl-form__control"
            required
          />
        </div>
      </div>
      <div className="vinyl-form__row">
        <div className="vinyl-form__group">
          <label htmlFor="genre" className="vinyl-form__text">
            Género:
          </label>
          <input
            id="genre"
            type="text"
            className="vinyl-form__control"
            required
          />
        </div>
        <div className="vinyl-form__group">
          <label htmlFor="format" className="vinyl-form__text">
            Formato:
          </label>
          <select id="format" className="vinyl-form__control" required>
            <option value=""></option>
            <option value={"7''"}>7''</option>
            <option value={"12''"}>12''</option>
          </select>
        </div>
      </div>
      <div className="vinyl-form__group">
        <label htmlFor="imageUrl" className="vinyl-form__text">
          Imagen URL:
        </label>
        <input
          id="imageUrl"
          type="url"
          className="vinyl-form__control"
          required
        />
      </div>
      <div className="vinyl-form__group">
        <div className="vinyl-form__optionals">
          <label htmlFor="style" className="vinyl-form__text">
            Estilo:
          </label>
          <span>(Campo opcional)</span>
        </div>
        <input id="style" type="text" className="vinyl-form__control" />
      </div>
      <div className="vinyl-form__group">
        <div className="vinyl-form__optionals">
          <label htmlFor="purchasedAt" className="vinyl-form__text">
            Comprado en:
          </label>
          <span>(Campo opcional)</span>
        </div>
        <input id="purchasedAt" type="text" className="vinyl-form__control" />
      </div>
      <div className="vinyl-form__group">
        <div className="vinyl-form__optionals">
          <label htmlFor="notes" className="vinyl-form__text">
            Notas:
          </label>
          <span>(Campo opcional)</span>
        </div>
        <textarea
          id="notes"
          maxLength={150}
          rows={5}
          className="vinyl-form__control"
        />
      </div>
      <div className="vinyl-form__checkbox-group">
        <label
          htmlFor="isOwned"
          className="vinyl-form__text  vinyl-form__text--checkbox "
        >
          Lo tengo:
        </label>
        <input id="isOwned" type="checkbox" className="vinyl-form__checkbox" />
      </div>
      <Button classNameModifier="form" action={() => {}} type="submit">
        Añadir vinilo
      </Button>
    </form>
  );
};

export default VinylForm;
