import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { theme } from '../theme/theme';

interface OfflineBannerProps {
  compact?: boolean;
}

export const OfflineBanner: React.FC<OfflineBannerProps> = ({ compact = false }) => {
  if (compact) {
    return (
      <View style={styles.compactContainer} accessible={true} accessibilityRole="text">
        <View style={styles.dot} />
        <Text style={styles.compactText}>100% Offline Capable • Airplane Mode Tested</Text>
      </View>
    );
  }

  return (
    <View style={styles.bannerContainer} accessible={true} accessibilityRole="text">
      <View style={styles.badgeRow}>
        <View style={styles.dot} />
        <Text style={styles.bannerTitle}>Offline Autonomous Architecture</Text>
      </View>
      <Text style={styles.bannerBody}>
        All portfolio data, skills, and image assets are stored locally on device. External documentation links are optional and explicitly labeled.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  compactContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.successLight,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    alignSelf: 'flex-start',
    marginBottom: theme.spacing.sm,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.success,
    marginRight: theme.spacing.xs + 2,
  },
  compactText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.success,
  },
  bannerContainer: {
    backgroundColor: '#F0FDF4',
    borderWidth: 1,
    borderColor: '#BBF7D0',
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    marginBottom: theme.spacing.md,
  },
  badgeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  bannerTitle: {
    fontSize: 13,
    fontWeight: '700',
    color: theme.colors.success,
  },
  bannerBody: {
    fontSize: 12,
    color: theme.colors.textSecondary,
    lineHeight: 17,
  },
});
