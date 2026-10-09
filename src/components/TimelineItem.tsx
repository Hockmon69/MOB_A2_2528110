import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { EducationItem } from '../types';
import { theme } from '../theme/theme';
import { Badge } from './Badge';

interface TimelineItemProps {
  item: EducationItem;
  isLast?: boolean;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast = false }) => {
  return (
    <View style={styles.container} accessible={true} accessibilityRole="summary">
      <View style={styles.leftColumn}>
        <View style={styles.bulletNode} />
        {!isLast && <View style={styles.connectorLine} />}
      </View>

      <View style={styles.rightContent}>
        <View style={styles.titleRow}>
          <Text style={styles.credentialText}>{item.credential}</Text>
          <Badge label={item.status} variant="success" size="sm" />
        </View>

        <Text style={styles.institutionText}>{item.institution}</Text>
        <Text style={styles.periodText}>{item.period} • {item.location}</Text>

        <View style={styles.highlightsContainer}>
          {item.highlights.map((highlight, index) => (
            <View key={index} style={styles.highlightRow}>
              <Text style={styles.highlightBullet}>›</Text>
              <Text style={styles.highlightText}>{highlight}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: theme.spacing.lg,
  },
  leftColumn: {
    width: 24,
    alignItems: 'center',
    marginRight: theme.spacing.sm,
  },
  bulletNode: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: theme.colors.primary,
    borderWidth: 2,
    borderColor: theme.colors.white,
    marginTop: 4,
    zIndex: 1,
  },
  connectorLine: {
    width: 2,
    flex: 1,
    backgroundColor: theme.colors.border,
    marginTop: 2,
  },
  rightContent: {
    flex: 1,
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.md,
    padding: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    ...theme.shadows.sm,
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  credentialText: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    flex: 1,
    marginRight: theme.spacing.xs,
  },
  institutionText: {
    fontSize: 14,
    fontWeight: '600',
    color: theme.colors.primaryDark,
    marginBottom: 2,
  },
  periodText: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginBottom: theme.spacing.sm,
  },
  highlightsContainer: {
    marginTop: 4,
  },
  highlightRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  highlightBullet: {
    fontSize: 16,
    fontWeight: '700',
    color: theme.colors.primary,
    marginRight: 6,
    lineHeight: 18,
  },
  highlightText: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    lineHeight: 18,
    flex: 1,
  },
});
