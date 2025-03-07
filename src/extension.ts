import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

    // Hiển thị thông báo cảnh báo khi mở VS Code
    vscode.window.showErrorMessage("⚠️ You have been hacked by tri_thong! ⚠️");

    // Đăng ký một command để nếu người dùng chạy sẽ thấy tiếp thông báo khác
    let disposable = vscode.commands.registerCommand('persistence-demo.alert', () => {
        vscode.window.showWarningMessage("🚨 This is just a demo. Stay safe! 🚨");
    });

    context.subscriptions.push(disposable);

    // Tự động kích hoạt command
    vscode.commands.executeCommand('persistence-demo.alert');
}

export function deactivate() {}
