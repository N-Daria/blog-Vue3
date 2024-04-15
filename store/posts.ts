import { defineStore } from "pinia";

interface PostState {
  posts: Post[];
  currentPosts: Post[];
  currentPage: number;
  totalPages: number;
  _firstIndex: number;
  _numberOfPosts: number;
  _buttons: number[];
  currentButtons: number[];
}

interface Post {
  createdAt: string;
  description: string;
  id: string;
  image: string;
  preview: string;
  title: string;
}

export const usePostsStore = defineStore("posts", {
  state: (): PostState => ({
    posts: [],
    currentPosts: [],
    currentPage: 1,
    totalPages: 1,
    _firstIndex: 1,
    _numberOfPosts: 8,
    _buttons: [],
    currentButtons: [],
  }),

  actions: {
    async fetchPosts() {
      const { data }: { data: { value: Post[] } } = await useFetch(
        "https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts"
      );
      if (data?.value) {
        this.posts = data.value;
        this.currentPosts = this.posts.slice(0, this._numberOfPosts);
        this.totalPages = Math.ceil(this.posts.length / this._numberOfPosts);

        this._buttons = Array.from(
          { length: this.totalPages },
          (_, i) => i + 1
        );
        this.currentButtons = this._buttons.slice(0, 5);
      }
    },

    changeCurrentPosts(pageNumber: number): void {
      this._firstIndex = pageNumber * this._numberOfPosts - this._numberOfPosts;

      this.currentPage = pageNumber;
      this.currentPosts = this.posts.slice(
        this._firstIndex,
        this._firstIndex + 8
      );

      if (this.currentPage - 1 < 2) {
        this.currentButtons = this._buttons.slice(0, 5);
      } else if (this.currentPage + 2 > this.totalPages) {
        this.currentButtons = this._buttons.slice(this.totalPages - 5);
      } else {
        this.currentButtons = this._buttons.slice(
          pageNumber - 3,
          pageNumber + 2
        );
      }
    },

    step(direction: number): void {
      direction === -1
        ? this.changeCurrentPosts(this.currentPage - 1)
        : this.changeCurrentPosts(this.currentPage + 1);
    },
  },
});
