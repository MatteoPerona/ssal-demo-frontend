import { Fragment, useContext, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { DataContainer } from "../App";
import { Col, Container, Row } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AttachmentSection from "../components/BuySell/AttachmentSection";


const Sell = () => {
    const [listSelected, setListSelected] = useState("desc");
    const [relatedProducts, setRelatedProducts] = useState([]);
    const { selectedProduct, setSelectedProduct, addToCart } = useContext(DataContainer);
    const { id } = useParams();
    if (!selectedProduct) {
        const storedProduct = localStorage.getItem(`selectedProduct-${id}`);
        setSelectedProduct(JSON.parse(storedProduct));
    }
    const [quantity, setQuantity] = useState(6);
    const handleQuantityChange = (event) => {
        setQuantity(parseInt(event.target.value));
    };
    const handelAdd = (selectedProduct, quantity) => {
        addToCart(selectedProduct, quantity);
        toast.success("Product has been added to cart!");
    }
    useEffect(() => {
        window.scrollTo(0, 0);
        setRelatedProducts(products.filter(item => item.category === selectedProduct?.category && item.id !== selectedProduct?.id));
    }, [selectedProduct]);

    return (
        <div style={{ alignItems: "center" }}>
            <Banner title="Create A Product Listing" />
            <div style={{ backgroundSize: "cover", minHeight: "calc(100vh - 70px)" }}>
            <section className="product-page">
                <Container>
                     <Row className="justify-content-center">
                        <Col md={14}>
                        <div  className="d-flex flex-column align-items-center" style={{ border: "1px solid #17202A", padding: "50px",
                                    borderRadius: "100px", }}>
                                
                            <div className="d-flex flex-column align-items-center"> {/* Add a div with the "d-flex flex-column align-items-center" classes */}
                                <h2 style={{ display: "inline-block",fontFamily:"Monsterrat" }}>Contribute to Our Marketplace</h2>
                                <div className="info">
                                    <span>Category:</span>
                                    <select name="membership" id="membership">
                                        <option value="free">Rice</option>
                                        <option value="bronze">Wheat</option>
                                    </select>
                                </div>
                                <p style={{ fontWeight: "bold" }}>Type of Product:</p>
                                <input type="text" style={{ width: "70%" , background: "#D6EAF8" }}/>
                                <p style={{ fontWeight: "bold" }}>Listing Price: </p>
                                <input type="text" style={{ width: "70%" , background: "#D6EAF8"  }}/>
                                <p style={{ fontWeight: "bold" }}>Quantity of Product:</p>
                                <input type="text" style={{ width: "70%" , background: "#D6EAF8" }}/>
                                <p style={{ fontWeight: "bold" }}>Date Listed:</p>
                                <input type="text" style={{ width: "70%" , background: "#D6EAF8" }}/>
                                <p style={{ fontWeight: "bold" }}>Attach Picture of Product:</p>
                                <AttachmentSection /> {/* Add Attachment Section component here */}
                                <button aria-label="Add" type="submit" className="add" onClick={() => handelAdd(selectedProduct, quantity)}>List Product</button>
                            </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
     </div>
    );
}

export default Sell;