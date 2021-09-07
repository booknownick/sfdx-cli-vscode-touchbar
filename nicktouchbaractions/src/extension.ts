
'use strict';
import * as vscode from 'vscode';
export function activate(context: vscode.ExtensionContext) {
    const jumpTo = vscode.commands.registerCommand('extension.jumpTo', () => {
        vscode.window
        .showInformationMessage(
            "Are you sure you want to deploy this to Salesforce?",
            {modal:true},
            ...["Deploy"]
        )
        .then((answer) => {
            if (answer === "Deploy") {
                vscode.commands.executeCommand('workbench.action.files.save');
                vscode.commands.executeCommand('sfdx.force.source.deploy.current.source.file');
            }
        });
        
    });
    const jumpBack = vscode.commands.registerCommand('extension.jumpBack', () => {
        vscode.window
        .showInformationMessage(
            "Are you sure you want to retrieve this file from Salesforce?",
            {modal:true},
            ...["Retrieve"]
        )
        .then((answer) => {
            if (answer === "Retrieve") {
                vscode.commands.executeCommand('sfdx.force.source.retrieve.current.source.file');
            }
        });
        
    });
    
    const executeanon = vscode.commands.registerCommand('extension.executeanon', () => {
        vscode.commands.executeCommand('sfdx.force.apex.execute.selection');
    });
    context.subscriptions.push(jumpTo, jumpBack, executeanon);
}

export function deactivate() {
}