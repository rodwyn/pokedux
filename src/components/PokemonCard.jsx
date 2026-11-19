import { StarOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { Meta } from "antd/es/list/Item";

const PokemonCard = ({name}) => {
  return (
    <Card
      title={name} cover={<img src="https://raw.githubusercontent.com/musartedev/curso-redux/27298f5dd3e37caf2a90a7a82580cd2905fcab31/src/statics/logo.svg" alt="ditto" />} extra={<StarOutlined />}>
      <Meta description="fire" />
    </Card>
  );
};

export default PokemonCard;