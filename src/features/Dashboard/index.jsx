import {
  CopyrightOutlined,
  ExperimentOutlined,
  RightCircleFilled,
  ShoppingCartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomerList from "./CustomerList";
import "./Dashboard.scss";
import OrderChart from "./OrderChart";
import dashboardAPI from "./api";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataDB } from "./slice";

function Dashboard(props) {
  const dispatch = useDispatch();
  const { dataDB, isLoading } = useSelector((state) => state.dashboard);

  // const [isLoading, setIsLoading] = useState(true);
  // const [dataDB, setDataDB] = useState(null);

  useEffect(() => {
    dispatch(fetchDataDB());
    // const fetchData = async () => {
    //   const data = await dashboardAPI.getData();
    //   setDataDB(data);
    // };

    // try {
    //   fetchData();
    //   console.log(dataDB);
    // } catch (err) {
    //   console.log(err);
    // } finally {
    //   setIsLoading(false);
    // }
  }, [dispatch]);

  return (
    <div className="dashboard">
      <div className="list-box">
        <div className="db-box">
          <div className="box-icon" style={{ background: "#009688" }}>
            <ShoppingCartOutlined />
          </div>
          <div className="box-content">
            <span className="title">Tổng đơn hàng</span>
            <span className="count">{dataDB?.order_count || 0}</span>
            <span className="link">
              <Link to="order">
                Chi tiết <RightCircleFilled />
              </Link>
            </span>
          </div>
        </div>
        <div className="db-box">
          <div className="box-icon" style={{ background: "#FFC107" }}>
            <ExperimentOutlined />
          </div>
          <div className="box-content">
            <span className="title">Tổng sản phẩm</span>
            <span className="count">{dataDB?.product_count || 0}</span>
            <span className="link">
              <Link to="product">
                Chi tiết <RightCircleFilled />
              </Link>
            </span>
          </div>
        </div>
        <div className="db-box">
          <div className="box-icon" style={{ background: "#2196F3" }}>
            <TeamOutlined />
          </div>
          <div className="box-content">
            <span className="title">Tổng khách hàng</span>
            <span className="count">{dataDB?.customer_count || 0}</span>
            <span className="link">
              <Link to="customer">
                Chi tiết <RightCircleFilled />
              </Link>
            </span>
          </div>
        </div>
        <div className="db-box">
          <div className="box-icon" style={{ background: "#e91e63" }}>
            <CopyrightOutlined />
          </div>
          <div className="box-content">
            <span className="title">Tổng nhãn hiệu</span>
            <span className="count">{dataDB?.brand_count || 0}</span>
            <span className="link">
              <Link to="brand">
                Chi tiết <RightCircleFilled />
              </Link>
            </span>
          </div>
        </div>
      </div>
      <div className="chart">
        <div className="title">
          <span>Đơn hàng 15 ngày gần nhất</span>
        </div>
        <div>
          <OrderChart isLoading={isLoading} orders={dataDB?.orders} />
        </div>
      </div>
      <div className="new-customer">
        <div className="title">
          <span>Khách hàng mới</span>
        </div>
        <div className="customers"></div>
        <CustomerList isLoading={isLoading} dataSource={dataDB?.customers} />
      </div>
    </div>
  );
}

export default Dashboard;
