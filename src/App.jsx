import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import Loading from "./components/Loading";
import RouterConfig from "./config/RouterConfig";
import PageContainer from "./container/PageContainer";
import Drawer from "@mui/material/Drawer";
import { calculateAmount, setDrawer } from "./redux/slices/basketSlice";
import { useEffect } from "react";

function App() {
  const { products, drawer, totalAmount } = useSelector(
    (store) => store.basket
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateAmount());
  }, []);

  return (
    <>
      <PageContainer>
        <Header />
        <RouterConfig />
        <Loading />

        <Drawer
          anchor="right"
          open={drawer}
          sx={{ padding: "20px" }}
          onClose={() => dispatch(setDrawer())}
        >
          {products &&
            products.map((product) => {
              return (
                <div key={product.id}>
                  <div className="flex-row" style={{ padding: "30px" }}>
                    <img
                      src={product.image}
                      alt="product_image"
                      width={70}
                      height={70}
                      style={{ marginRight: "15px" }}
                    />
                    <p style={{ width: "320px", marginRight: "5px" }}>
                      {product.title}({product.count})
                    </p>
                    <p style={{ fontWeight: "bold" }}>{product.price}$</p>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: "rgb(218, 86, 68)",
                        marginLeft: "20px",
                        color: "#fff",
                      }}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          <div>
            <p style={{ textAlign: "center" }}>
              Total : {totalAmount.toFixed(2)} $
            </p>
          </div>
          <div style={{ textAlign: "center" }}>
            <button className="close_btn" onClick={() => dispatch(setDrawer())}>
              Close
            </button>
          </div>
        </Drawer>
      </PageContainer>
    </>
  );
}

export default App;
