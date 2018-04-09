import { ADD_FLASH_MESSAGE } from "./actions";

export function addFlashMessages(message) {
  return {
    type: ADD_FLASH_MESSAGE,
    message
  };
}
