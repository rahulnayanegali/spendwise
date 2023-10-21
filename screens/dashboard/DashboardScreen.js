import { StyleSheet, Text, View } from 'react-native';

const Dashboardcreen = () => {
	return (
		<View style={styles.container}>
			<Text>Dashboard Screen</Text>
		</View>
	);
};
  
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});

export default Dashboardcreen;