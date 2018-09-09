import "isomorphic-fetch"
import {
  Dropbox
} from "dropbox";
import {
  DropboxTeam
} from "dropbox";
import { TOKEN_DROPBOX } from "../env";
export const state = () => ({
  structure: []
});
export const mutations = {
  setStucture(state, structure) {
    state.structure = structure.slice();
  }
};
export const actions = {
  async nuxtServerInit({ commit }) {
    let dropbox = new Dropbox({
      accessToken: TOKEN_DROPBOX
    });
    await dropbox.filesListFolder({path: '/posts'})
    .then(response => {
      const structure = response.entries;
      commit("setStucture", structure);
    })
    .catch(error => {
      console.log(error);
    });
  }
};
