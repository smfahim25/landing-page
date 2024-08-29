"use client";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/core/fonts/inter.css";
import "@blocknote/mantine/style.css";
import "@blocknote/react/style.css";
import { useEffect } from "react";
import { useEditor } from "../utils/editor";
import "../styles.css";

export default function BlockNoteViewer({ html, initial }) {
  // Creates a new editor instance.
  const editor = useEditor();

  useEffect(() => {
    async function loadInitialHTML() {
      const defaultBlocks = await editor.tryParseHTMLToBlocks(html);
      console.log(defaultBlocks);
      editor.replaceBlocks(editor.document, defaultBlocks);
    }

    if (html && editor) {
      loadInitialHTML();
    }
  }, [editor, html]);

  return (
    <div className="w-full">
      <BlockNoteView editor={editor} editable={false} />
    </div>
  );
}
