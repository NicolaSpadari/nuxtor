const test = ref("Text from composable");

export const useTest = () => {
	const setValue = async () => {
		const { data } = await useFetch<MyTest>("/api/test");

		test.value = data.value!.text;
	};

	return {
		test,
		setValue
	};
};
