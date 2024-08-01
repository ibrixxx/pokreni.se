import React, { ReactNode } from "react";
import { StyleSheet, ViewStyle } from "react-native";
import ViewDripsy from "@/components/themed/ViewDripsy";
import Modal from "react-native-modal";

interface BottomModalProps {
  isVisible: boolean;
  onClose: () => void;
  height?: number;
  style?: ViewStyle;
  children?: ReactNode;
}

const BottomModal = ({
  isVisible,
  onClose,
  height = 200,
  children,
  style,
}: BottomModalProps) => {
  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={onClose}
      onSwipeComplete={onClose}
      onBackButtonPress={onClose}
      onModalHide={onClose}
      swipeDirection="down"
      animationIn={"slideInUp"}
      useNativeDriver={false}
      avoidKeyboard={true}
      style={styles.container}
    >
      <ViewDripsy style={[styles.modalContent, { height: height }, style]}>
        <ViewDripsy>{children}</ViewDripsy>
      </ViewDripsy>
    </Modal>
  );
};

export default BottomModal;

const styles = StyleSheet.create({
  modalContent: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingVertical: 20,
  },
  container: { justifyContent: "flex-end", margin: 0 },
});
