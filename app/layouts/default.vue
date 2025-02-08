<template>
	<div>
		<SiteNavbar class="sticky bg-(--ui-bg)/75 backdrop-blur" />
		<SiteSidebar />

		<UContainer>
			<slot />
		</UContainer>
	</div>
</template>
