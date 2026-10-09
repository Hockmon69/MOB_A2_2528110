import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SkillItem } from '../types';
import { theme } from '../theme/theme';
import { Badge } from './Badge';

interface SkillCardProps {
  skill: SkillItem;
}

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <View style={styles.card} accessible={true} accessibilityRole="summary">
      <View style={styles.headerRow}>
        <Text style={styles.skillName}>{skill.name}</Text>
        <Badge
          label={skill.level}
          variant={skill.level === 'Advanced' ? 'accent' : 'primary'}
          size="sm"
        />
      </View>

      <View style={styles.metaRow}>
        <Text style={styles.categoryText}>{skill.category}</Text>
        <Text style={styles.dotSeparator}>•</Text>
        <Text style={styles.experienceText}>{skill.experienceYears} active practice</Text>
      </View>

      <Text style={styles.description}>{skill.description}</Text>

      <View style={styles.tagsContainer}>
        {skill.tags.map((tag, index) => (
          <Badge key={index} label={tag} variant="neutral" size="sm" />
        ))}
      </View>
    </View>
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
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  skillName: {
    fontSize: 17,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    flex: 1,
    marginRight: theme.spacing.sm,
  },
  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.sm,
  },
  categoryText: {
    fontSize: 12,
    fontWeight: '600',
    color: theme.colors.primary,
  },
  dotSeparator: {
    fontSize: 12,
    color: theme.colors.textMuted,
    marginHorizontal: 6,
  },
  experienceText: {
    fontSize: 12,
    color: theme.colors.textSecondary,
  },
  description: {
    fontSize: 14,
    color: theme.colors.textSecondary,
    lineHeight: 20,
    marginBottom: theme.spacing.md,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
