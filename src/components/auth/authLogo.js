import React from "react";
import { View, Image } from "react-native";

import Logo from "../../../assets/images/logo.png";

const LogoComponent = () => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={Logo}
        style={{
          width: 200,
          height: 200
        }}
      />
    </View>
  );
};

export default LogoComponent;
