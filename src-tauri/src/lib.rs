#[cfg_attr(mobile, tauri::mobile_entry_point)]

use tauri::{
	menu::{Menu, MenuItem},
	tray::TrayIconBuilder
};
use std::process::Command;

#[tauri::command]
async fn convert_to_gif(input_path: String, output_path: String) -> Result<(), String> {
    let output = Command::new("ffmpeg")
        .arg("-i")
        .arg(&input_path)
        .arg(&output_path)
        .output();

    match output {
        Ok(output) => {
            if output.status.success() {
                Ok(())
            } else {
                Err(String::from_utf8_lossy(&output.stderr).to_string())
            }
        }
        Err(e) => Err(e.to_string()),
    }
}

pub fn run() {
    tauri::Builder::default()
		.setup(|app| {
			let quit_i = MenuItem::with_id(app, "quit", "Quit", true, None::<&str>)?;
			let menu = Menu::with_items(app, &[&quit_i])?;

			let _tray = TrayIconBuilder::new()
				.menu(&menu)
				.show_menu_on_left_click(true)
				.icon(app.default_window_icon().unwrap().clone())
				.on_menu_event(|app, event| match event.id.as_ref() {
					"quit" => {
						app.exit(0);
					}
					other => {
						println!("menu item {} not handled", other);
					}
				})
				.build(app)?;

			Ok(())
		})
		.plugin(tauri_plugin_shell::init())
		.plugin(tauri_plugin_notification::init())
		.plugin(tauri_plugin_os::init())
		.plugin(tauri_plugin_fs::init())
		.plugin(tauri_plugin_store::Builder::new().build())
		.invoke_handler(tauri::generate_handler![convert_to_gif])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
