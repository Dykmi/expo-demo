import { Box, Icon, IconButton, Text } from "native-base";
import useStore from "../store";

const HomeScreen = () => {
  const { count, increment, decrement } = useStore();

  return (
    <Box className="flex-1 items-center justify-center p-4">
      <Text className="text-2xl font-bold">Counter: {count}</Text>
      <IconButton
        icon={<Icon name="plus" size={20} color="white" />}
        title="Increment"
        onPress={increment}
      />
      <IconButton
        icon={<Icon name="minus" size={20} color="white" />}
        title="Decrement"
        onPress={decrement}
      />
    </Box>
  );
};

export default HomeScreen;