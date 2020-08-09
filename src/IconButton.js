import React from "react";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/dist/FontAwesome5";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";
import MateriaComunitylIcon from "react-native-vector-icons/MaterialCommunityIcons";

export default (IconButton = ({
  iconButtonStyle,
  onPress,
  iconName,
  iconSize,
  iconColor,
  materialIcon,
  materialCommunityIcon
}) => {
  return (
    <TouchableOpacity style={iconButtonStyle} onPress={onPress}>
      {materialCommunityIcon ? (
        <MateriaComunitylIcon
          name={iconName}
          size={iconSize}
          color={iconColor}
        />
      ) : materialIcon ? (
        <MaterialIcon name={iconName} size={iconSize} color={iconColor} />
      ) : (
        <Icon name={iconName} size={iconSize} color={iconColor} />
      )}
    </TouchableOpacity>
  );
});
