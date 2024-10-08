import { ApiConfiguration, ApiProvider, } from "./api";
import { OpenAIHandler } from "../api/openai";

export interface WebviewMessage {
	type:
	| "apiConfiguration"
	| "maxRequestsPerTask"
	| "customInstructions"
	| "webviewDidLaunch"
	| "newTask"
	| "askResponse"
	| "clearTask"
	| "didShowAnnouncement"
	| "selectImages"
	| "exportCurrentTask"
	| "showTaskWithId"
	| "deleteTaskWithId"
	| "exportTaskWithId"
	| "getEnvironmentVariables"
	| "fetchAvailableModels";
	text?: string
	askResponse?: ClaudeAskResponse
	apiConfiguration?: ApiConfiguration
	images?: string[]
}

export type ClaudeAskResponse = "yesButtonTapped" | "noButtonTapped" | "messageResponse"
