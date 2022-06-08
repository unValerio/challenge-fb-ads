import useCreateView from './useCreateView';
import './CreateView.css';

function CreateView() {
  const { product, onChange, onSubmit } = useCreateView();

  return (
    <>
      <h1 className="page-content">New add for {product.productName}</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="headline">Headline</label>
          <input
            type="text"
            name="headline"
            id="headline"
            placeholder="Headline"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="Description"
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="callToAction">Call to action</label>
          <input
            type="text"
            name="callToAction"
            id="callToAction"
            placeholder="Call to action"
            onChange={onChange}
            required
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
}

export default CreateView;
