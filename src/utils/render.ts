import { Block } from '@/core/Block/Block';

export function render(query: string, block: Block) {
    const root = document.getElementById(query);
    if (!root) {
        return null;
    }
    root.append(block.getContent()!);
    return root;
}
