import React from 'react';
import { theme } from '../../src/theme';
import { H5 } from '../../src/components/Typography';

export default {
  title: 'Design Tokens/Colors',
};

type ColorBlockProps = {
  color: string;
  name: string;
};

function ColorBlock(props: ColorBlockProps) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: 140,
          backgroundColor: props.color,
          borderRadius: 8,
          border: '1px solid #ddd',
        }}
      />
      <H5>{props.name}</H5>
    </div>
  );
}

export function Default() {
  const mappedColors = Object.keys(theme.colors).map((key) => {
    const colorBaseName = key;
    const colors = theme.colors[key];

    if (typeof colors === 'object') {
      return Object.keys(colors).map((colorKey) => {
        return {
          colorName: `${colorBaseName}-${colorKey}`,
          color: colors[colorKey],
        };
      });
    }

    return [
      {
        colorName: `${colorBaseName}`,
        color: colors,
      },
    ];
  });

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(8, 1fr)',
        gridGap: 20,
      }}
    >
      {mappedColors.map((colors) => {
        return colors.map((color) => {
          return <ColorBlock name={color.colorName} color={color.color} />;
        });
      })}
      {/* <ColorBlock name="1" color="red" />
      <ColorBlock name="2" color="green" />
      <ColorBlock name="3" color="yellow" />
      <ColorBlock name="1" color="red" />
      <ColorBlock name="2" color="green" />
      <ColorBlock name="3" color="yellow" />
      <ColorBlock name="1" color="red" />
      <ColorBlock name="2" color="green" /> */}
    </div>
  );

  return <pre>{JSON.stringify(mappedColors, null, 2)}</pre>;
}
