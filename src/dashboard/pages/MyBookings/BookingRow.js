import { Tr } from "@chakra-ui/react";
import CstmTd from "../../components/CstmTd/CstmTd";
import useProduct from "../../../hooks/useProduct";
import ImageNameCard from "../../components/ImageNameCard/ImageNameCard";
import { dateTimeFormat, utcToLocalTime } from "../../../utils";

const BookingRow = ({ booking }) => {
  // query
  const { isLoading: productLoading, data: productData } = useProduct(
    booking.productId
  );
  const product = productData?.data;

  if (productLoading) return;

  return (
    <Tr>
      <CstmTd>
        <ImageNameCard img={product.images[0]} name={product.name} />
      </CstmTd>
      <CstmTd>TK {product.price}</CstmTd>
      <CstmTd>TK {dateTimeFormat(utcToLocalTime(booking.postedTime))}</CstmTd>

      <CstmTd>
        {product.description.length > 20
          ? product.description.slice(0, 20) + "..."
          : product.description}
      </CstmTd>

      <CstmTd>
        {booking?.isConfirmed === true
          ? "Purchased"
          : product?.isSold === true
          ? "Sold Out"
          : "Pending"}
      </CstmTd>
    </Tr>
  );
};

export default BookingRow;
