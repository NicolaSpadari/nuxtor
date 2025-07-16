<template>
	<LayoutTile
		title="Notifications"
		description="Send native notifications to the client using the notification plugin."
	>
		<UForm :state="inputState" :schema="schema" class="flex flex-col gap-y-4 items-end" @submit="createNotification">
			<UFormField label="Notification title" name="notificationTitle">
				<UInput v-model="inputState.notificationTitle" variant="subtle" size="lg" />
			</UFormField>

			<UFormField label="Notification body (optional)" name="notificationBody">
				<UInput v-model="inputState.notificationBody" variant="subtle" size="lg" />
			</UFormField>

			<UButton type="submit" size="lg">
				Send notification
			</UButton>
		</UForm>
	</LayoutTile>
</template>

<script lang="ts" setup>
	definePageMeta({
		name: "Notifications",
		icon: "lucide:message-square-more",
		category: "interface",
		description: "Send native notifications"
	});

	const schema = z.object({
		notificationTitle: z.string({
			error: "Title is required"
		}).nonempty(),
		notificationBody: z.string().optional()
	});

	type Schema = zInfer<typeof schema>;

	const inputState = ref<Partial<Schema>>({
		notificationTitle: undefined,
		notificationBody: undefined
	});

	const toast = useToast();
	const permissionGranted = ref(false);

	const createNotification = async () => {
		permissionGranted.value = await useTauriNotificationIsPermissionGranted();

		if (!permissionGranted.value) {
			const permission = await useTauriNotificationRequestPermission();
			permissionGranted.value = permission === "granted";
		}

		if (permissionGranted.value) {
			useTauriNotificationSendNotification({
				title: inputState.value.notificationTitle!,
				body: inputState.value.notificationBody
			});

			inputState.value.notificationTitle = inputState.value.notificationBody = undefined;
		} else {
			toast.add({
				title: "Error",
				description: "Missing notifications permission",
				color: "error"
			});
		}
	};
</script>
