import { Pagination } from "antd";

const PaginationSection = () => {
  return (
    <div className="example">
     <Pagination defaultCurrent={1} total={50} showSizeChanger />
    </div>
  );
};

export { PaginationSection };
