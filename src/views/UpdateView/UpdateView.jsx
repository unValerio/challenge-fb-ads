import useUpdateView from './useUpdateView';
import './UpdateView.css';


function UpdateView() {
  const { product, ad, onChange, onSubmit } = useUpdateView();

  return (
    <>
      <h1 className="page-content">Updating ad of {product.productName}</h1>
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
          <label htmlFor="image">Image</label>
          <input
            type="url"
            name="image"
            id="image"
            placeholder="image"
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

export default UpdateView;
