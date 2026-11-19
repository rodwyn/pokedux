import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Meta } from "antd/es/list/Item";

const PokemonCard = () => {
  return (
    <Card
      title="Ditto" cover={<img src="" alt="ditto" />} extra={<StarOutlined />}>
      <Meta description="fire" />
    </Card>
  );
};

export default PokemonCard;