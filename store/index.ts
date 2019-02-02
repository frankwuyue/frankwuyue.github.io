import "isomorphic-fetch";
import { Dropbox } from "dropbox";
import { DropboxTeam } from "dropbox";
import { TOKEN_DROPBOX } from "../env";
import fs from "file-system";
import unzipper from "unzipper";
import _ from "lodash";
import { error } from "util";
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
    const dropbox = new Dropbox({
      accessToken: TOKEN_DROPBOX
    });
    await dropbox
      .filesListFolder({ path: "/posts" })
      .then(response => {
        const structure = response.entries;
        commit("setStucture", structure);
      })
      .catch(error => {
        console.log(error);
      });
    await dropbox
      .filesDownloadZip({ path: "/posts" })
      .then(response => {
        let blob = (<any>response).fileBinary;
        fs.writeFile("static/post.zip", blob, err => {
          if (err) console.log(err);
          console.log("post.zip saved");
          fs.createReadStream("static/post.zip").pipe(
            unzipper.Extract({ path: "static/markdown" })
          );
          console.log("post.zip unzipped");
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
