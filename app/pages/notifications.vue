<template>
	<LayoutTile
		title="Notifications"
		description="Send native notifications to the client using the notification plugin."
	>
		<form @submit.prevent="createNotification()">
			<div class="mx-auto max-w-xl" lg="mr-0 max-w-lg">
				<div class="grid grid-cols-1 gap-x-8 gap-y-6">
					<div>
						<label for="notification-title" class="block text-sm text-white font-semibold leading-6">Notification title</label>
						<div class="mt-2.5">
							<input id="notification-title" v-model="notificationTitle" type="text" name="notification-title" class="block w-full border-0 rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset" sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset">
						</div>
					</div>
					<div>
						<label for="notification-body" class="block text-sm text-white font-semibold leading-6">Notification body</label>
						<div class="mt-2.5">
							<input id="notification-body" v-model="notificationBody" type="text" name="notification-body" class="block w-full border-0 rounded-md bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-white/10 ring-inset" sm="text-sm leading-6" focus="ring-2 ring-emerald-500 ring-inset">
						</div>
					</div>

					<div class="flex justify-end">
						<Btn type="submit">
							Send notification
						</Btn>
					</div>

					<p v-if="permissionError" class="mt-3 text-right text-sm text-red-500 font-semibold leading-6">
						Missing permissions
					</p>
				</div>
			</div>
		</form>
	</LayoutTile>
</template>

<script lang="ts" setup>
	definePageMeta({
		name: "Notifications",
		icon: "lucide:message-square-more"
	});

	const notificationTitle = ref("");
	const notificationBody = ref("");
	const permissionError = ref(false);

	const createNotification = async () => {
		let permissionGranted = await useTauriNotificationIsPermissionGranted();

		if (!permissionGranted) {
			const permission = await useTauriNotificationRequestPermission();
			permissionGranted = permission === "granted";
		}

		if (permissionGranted) {
			useTauriNotificationSendNotification({
				title: notificationTitle.value,
				body: notificationBody.value
			});

			notificationTitle.value = "";
			notificationBody.value = "";
		} else {
			permissionError.value = true;

			useTimeoutFn(() => {
				permissionError.value = false;
			}, 3000);
		}
	};
</script>
