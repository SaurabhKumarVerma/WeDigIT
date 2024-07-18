import React from "react";
import { StyleSheet, useWindowDimensions, View, ViewStyle } from "react-native";
import Modal from "react-native-modal";
import { colors } from "../../Theme/colors";

export interface IModalProps {
  isVisible: boolean;
  closeModal: () => any;
  children: React.ComponentType<any> | React.ReactElement | null | undefined;
  autoClose?: boolean;
  style?: ViewStyle;
  height?: number;
  width?: number;
  autoCloseAndNavigateBack?: boolean;
  onAutoClose?: () => void;
}

const CustomModal = (props: IModalProps) => {
  const { width } = useWindowDimensions();
  if (props.onAutoClose && !props.autoClose) {
    console.warn(
      "Cannot use onAutoClose Function without autoClose:boolean property"
    );
  }

  let timeout: NodeJS.Timeout;

  const autoCloseFunc = () => {
    timeout = setTimeout(() => {
      props.onAutoClose ? props.onAutoClose() : null;
      clearTimeout(timeout);
      props.closeModal();
    }, 2000);
  };

  return (
    <Modal
      isVisible={props.isVisible}
      onShow={() => {
        props.autoClose ? autoCloseFunc() : null;
      }}
      onDismiss={() => {
        props.closeModal();
      }}
      style={{
        width: width,
        alignSelf: "center",
      }}
    >
      <View
        style={[
          styles.modal,
          {
            alignItems: "center",
            justifyContent: "center",
            height: props.height,
          },
        ]}
      >
        <View style={{ flex: 1 }}>{props.children}</View>
      </View>
    </Modal>
  );
};

export default CustomModal;

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
  },
  modal: {
    borderRadius: 32,
    backgroundColor: colors.white,
    position: "absolute",
    bottom: 0,
  },
});
