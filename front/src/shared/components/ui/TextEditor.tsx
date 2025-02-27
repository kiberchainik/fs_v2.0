'use client'

import { useEditor, EditorContent, Editor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Highlight from '@tiptap/extension-highlight'
import TextAlign from '@tiptap/extension-text-align'
import Heading from "@tiptap/extension-heading";
import { FC } from 'react'
import { AlignCenter, AlignJustify, AlignLeft, AlignRight, Bold, Heading1, Heading2, Heading3, Italic, List, ListOrdered, Pilcrow, Strikethrough } from 'lucide-react'
import { Separator, Toggle } from '.'

export interface ITextEditor {
  onChange: (richText: string) => void
  description: string
}

const TextEditor: FC<ITextEditor> = ({ description, onChange }) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "min-h-[200px] max-h-[400px] w-full mb-0 rounded-md rounded-br-none rounded-bl-none border border-input bg-transparent px-3 py-2 border-b-0 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-auto",
      },
    },
    extensions: [
      StarterKit.configure({
        orderedList: {
          HTMLAttributes: {
            class: "list-decimal pl-4",
          },
        },
        bulletList: {
          HTMLAttributes: {
            class: "list-disc pl-4",
          },
        },
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph', 'left', 'center', 'right', 'justify'],
      }),
      Highlight,
      Heading.configure({
        levels: [1, 2, 3],
      }),
    ],
    immediatelyRender: false,
    content: description, // Set the initial content with the provided value
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML()); // Call the onChange callback with the updated HTML content
    },
  });
//console.log(description);

  return (
    <>
      <EditorContent editor={editor} />
      {editor ? <RichTextEditorToolbar editor={editor} /> : null}
    </>
  )
}

const RichTextEditorToolbar = ({ editor }: { editor: Editor }) => {
  return (
    <div className="border border-input bg-transparent rounded-br-md rounded-bl-md p-1 flex flex-row items-center gap-1">
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 1 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className='hidden md:flex'
      >
        <Heading1 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 2 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className='hidden md:flex'
      >
        <Heading2 className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("heading", { level: 3 })}
        onPressedChange={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className='hidden md:flex'
      >
        <Heading3 className="h-4 w-4" />
      </Toggle>
      <Separator orientation="vertical" className="w-[1px] h-8 hidden md:flex" />
      <Toggle
        size="sm"
        pressed={editor.isActive("bold")}
        onPressedChange={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("italic")}
        onPressedChange={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("strike")}
        onPressedChange={() => editor.chain().focus().toggleStrike().run()}
        className='hidden md:flex'
      >
        <Strikethrough className="h-4 w-4" />
      </Toggle>
      <Separator orientation="vertical" className="w-[1px] h-8" />
      <Toggle
        size="sm"
        pressed={editor.isActive("bulletList")}
        onPressedChange={() => editor.chain().focus().toggleBulletList().run()}
      >
        <List className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("orderedList")}
        onPressedChange={() => editor.chain().focus().toggleOrderedList().run()}
        className='hidden md:flex'
      >
        <ListOrdered className="h-4 w-4" />
      </Toggle>
      <Separator orientation="vertical" className="w-[1px] h-8" />
      <Toggle
        size="sm"
        pressed={editor.isActive("paragraph")}
        onPressedChange={() => editor.commands.setParagraph()}
        className='hidden md:flex'
      >
        <Pilcrow className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("left")}
        onPressedChange={() => editor.commands.setTextAlign('left')}
      >
        <AlignLeft className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("center")}
        onPressedChange={() => editor.commands.setTextAlign('center')}
        className='hidden md:flex'
      >
        <AlignCenter className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive('right')}
        onPressedChange={() => editor.commands.setTextAlign('right')}
        className='hidden md:flex'
      >
        <AlignRight className="h-4 w-4" />
      </Toggle>
      <Toggle
        size="sm"
        pressed={editor.isActive("justify")}
        onPressedChange={() => editor.commands.setTextAlign('justify')}
      >
        <AlignJustify className="h-4 w-4" />
      </Toggle>
    </div>
  );
};

export default TextEditor