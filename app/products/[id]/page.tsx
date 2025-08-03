interface Params {
  id: string;
}

const ProductsDetailsPage = ({ params }: { params: Params }) => {
  return <h1>Products ID: {params.id}</h1>;
};

export default ProductsDetailsPage;