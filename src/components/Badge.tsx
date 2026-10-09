import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

interface BadgeProps {
  label: string;
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'neutral' | 'accent';
  size?: 'sm' | 'md';
}

export const Badge: React.FC<BadgeProps> = ({
  label,
  variant = 'primary',
  size = 'md',
}) => {
  const getColors = () => {
    switch (variant) {
      case 'success':
        return { bg: theme.colors.successLight, text: theme.colors.success };
      case 'warning':
        return { bg: theme.colors.warningLight, text: theme.colors.warning };
      case 'danger':
        return { bg: theme.colors.dangerLight, text: theme.colors.danger };
      case 'accent':
        return { bg: theme.colors.accentLight, text: theme.colors.accent };
      case 'neutral':
        return { bg: theme.colors.surface, text: theme.colors.textSecondary };
      case 'primary':
      default:
        return { bg: theme.colors.primaryLight, text: theme.colors.primaryDark };
    }
  };

  const colors = getColors();

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.bg },
        size === 'sm' && styles.containerSm,
      ]}
      accessible={true}
      accessibilityRole="text"
    >
      <Text
        style={[
          styles.text,
          { color: colors.text },
          size === 'sm' && styles.textSm,
        ]}
      >
        {label}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs + 2,
    borderRadius: theme.borderRadius.full,
    alignSelf: 'flex-start',
    marginRight: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
  },
  containerSm: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
  },
  text: {
    fontSize: 12,
    fontWeight: '600',
  },
  textSm: {
    fontSize: 11,
  },
});
