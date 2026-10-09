import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { ProjectItem } from '../types';
import { theme } from '../theme/theme';
import { Badge } from './Badge';

interface ProjectCardProps {
  project: ProjectItem;
  onPress: () => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.8}
      accessible={true}
      accessibilityRole="button"
      accessibilityLabel={`View project details for ${project.title}`}
      accessibilityHint="Navigates to full problem statement, architecture, and contribution details"
    >
      <View style={styles.topRow}>
        <Text style={styles.title} numberOfLines={2}>
          {project.title}
        </Text>
      </View>

      <Text style={styles.tagline}>{project.tagline}</Text>

      <Text style={styles.problemPreview} numberOfLines={3}>
        {project.problem}
      </Text>

      <View style={styles.techList}>
        {project.technology.slice(0, 3).map((tech, index) => (
          <Badge key={index} label={tech} variant="primary" size="sm" />
        ))}
        {project.technology.length > 3 && (
          <Badge
            label={`+${project.technology.length - 3} more`}
            variant="neutral"
            size="sm"
          />
        )}
      </View>

      <View style={styles.footerRow}>
        <View style={styles.offlinePill}>
          <Text style={styles.offlineText}>Offline Documentation Included</Text>
        </View>
        <Text style={styles.viewDetailsText}>View Details ›</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.card,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.borderLight,
    ...theme.shadows.sm,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    lineHeight: 23,
    flex: 1,
  },
  tagline: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.primary,
    marginBottom: theme.spacing.sm,
  },
  problemPreview: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: theme.spacing.md,
  },
  techList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: theme.spacing.md,
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: theme.colors.borderLight,
    paddingTop: theme.spacing.sm,
  },
  offlinePill: {
    backgroundColor: theme.colors.surface,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: 2,
    borderRadius: theme.borderRadius.xs,
  },
  offlineText: {
    fontSize: 11,
    color: theme.colors.textMuted,
    fontWeight: '500',
  },
  viewDetailsText: {
    fontSize: 14,
    fontWeight: '700',
    color: theme.colors.primary,
  },
});
