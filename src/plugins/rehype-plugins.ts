import { visit } from 'unist-util-visit';
import type {Element, Text, Root} from 'hast';

export function rehypeImageProcessor() {
    return (tree: Root) => {
        visit(tree, 'element', (node:Element) => {
            if (node.tagName === 'p' && node.children.length === 1) {
                const child = node.children[0] as Element;
                if (child.tagName === 'img') {
                  const imgNode = child;
                  const alt = imgNode.properties.alt || '';

                  if (alt !== "" || !alt.startsWith("_")){
                    node.tagName = 'figure';
                    node.properties = {};
                    node.children = [
                      imgNode,
                      {
                          type: 'element',
                          tagName: 'figcaption',
                          properties: {},
                          children: [{ type: 'text', value: alt } as Text]
                      }

                    ]
                  }
                }

            }
        });
    };
}