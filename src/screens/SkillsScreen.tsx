import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../theme/theme';
import { SkillCard } from '../components/SkillCard';
import { TimelineItem } from '../components/TimelineItem';
import { GENUINE_SKILLS, EDUCATION_TIMELINE } from '../services/storageService';

export const SkillsScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'skills' | 'education'>('skills');

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
      {/* Segmented Controller */}
      <View style={styles.segmentedControl} accessible={true} accessibilityRole="tablist">
        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'skills' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('skills')}
          accessibilityRole="tab"
          accessibilityState={{ selected: activeTab === 'skills' }}
          accessibilityLabel="Technical Skills tab"
        >
          <Text
            style={[styles.segmentText, activeTab === 'skills' && styles.segmentTextActive]}
          >
            Technical Skills ({GENUINE_SKILLS.length})
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.segmentBtn, activeTab === 'education' && styles.segmentBtnActive]}
          onPress={() => setActiveTab('education')}
          accessibilityRole="tab"
          accessibilityState={{ selected: activeTab === 'education' }}
          accessibilityLabel="Education & Training tab"
        >
          <Text
            style={[styles.segmentText, activeTab === 'education' && styles.segmentTextActive]}
          >
            Education & Training
          </Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'skills' ? (
        <View>
          <Text style={styles.sectionHeader}>Verified Competencies</Text>
          <Text style={styles.sectionSubtext}>
            Genuine engineering proficiencies developed through practical projects and coursework at INES-Ruhengeri.
          </Text>
          {GENUINE_SKILLS.map((skill) => (
            <SkillCard key={skill.id} skill={skill} />
          ))}
        </View>
      ) : (
        <View>
          <Text style={styles.sectionHeader}>Academic & Training Pathway</Text>
          <Text style={styles.sectionSubtext}>
            Continuous education timeline structured with reusable timeline components.
          </Text>
          {EDUCATION_TIMELINE.map((item, index) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={index === EDUCATION_TIMELINE.length - 1}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    padding: theme.spacing.lg,
    paddingBottom: theme.spacing.xxxl,
  },
  segmentedControl: {
    flexDirection: 'row',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.md,
    padding: 4,
    marginBottom: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  segmentBtn: {
    flex: 1,
    paddingVertical: theme.spacing.sm + 2,
    alignItems: 'center',
    borderRadius: theme.borderRadius.sm,
  },
  segmentBtnActive: {
    backgroundColor: theme.colors.card,
    ...theme.shadows.sm,
  },
  segmentText: {
    fontSize: 13,
    fontWeight: '600',
    color: theme.colors.textMuted,
  },
  segmentTextActive: {
    color: theme.colors.primary,
    fontWeight: '700',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '700',
    color: theme.colors.textPrimary,
    marginBottom: 4,
  },
  sectionSubtext: {
    fontSize: 13,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.lg,
    lineHeight: 18,
  },
});
