import { type SchemaTypeDefinition } from 'sanity'
import { blogPost } from './blogPost'

// Code block type for code snippets in articles
const codeBlock: SchemaTypeDefinition = {
    name: 'code',
    title: '💻 كود برمجي',
    type: 'object',
    fields: [
        { name: 'language', title: 'اللغة', type: 'string', options: { list: ['javascript', 'python', 'bash', 'json', 'html', 'css'] } },
        { name: 'filename', title: 'اسم الملف', type: 'string' },
        { name: 'code', title: 'الكود', type: 'text', rows: 10 },
    ],
}

export const schemaTypes: SchemaTypeDefinition[] = [blogPost, codeBlock]
