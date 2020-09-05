import Index from "./pages/Index.svelte";
import About from "./pages/About.svelte";
import AboutTest from "./pages/AboutTest.svelte";

export default {
  "/": Index,
  "/about": About,
  "/about/:test": AboutTest,
};
