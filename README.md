My name is Fajwan Chanjwok.

# FCPortfolio - Personal Portfolio Mobile Application
**Course:** SWE 3409 Mobile Application Development  
**Academic Year:** 2026/2027  
**Institution:** Institut d'Enseignement Supérieur de Ruhengeri (INES-Ruhengeri)  
**Student Name:** Fajwan Chanjwok (Legal: Deng Fajwan Changjwok Fajwan)  
**Registration Number:** 25/28110  
**Individual Verification Code:** MOB-A2-8110  
**Package Identifier:** `rw.ac.ines.ug2528110.fcportfolio`  

---

## 1. Application Overview & Purpose
**FCPortfolio** is an individual, offline-first personal portfolio Android application engineered with React Native, Expo SDK 51, and TypeScript. Designed for on-the-go recruiter evaluation during interviews, internships, and engineering challenges, the app runs completely standalone without requiring Expo Go or an active internet connection. Evaluators can inspect technical competencies, academic progression, and verifiable student projects in under two minutes.

---

## 2. Core Architecture & Implemented Features

### Feature 1: Home & Introduction
- Displays the mandatory core identity statement: **“My name is Fajwan Chanjwok.”**
- Shows verified profile avatar, professional headline, biographical overview, and individual verification code chip (`MOB-A2-8110`).
- Provides rapid touch targets to projects, skills, and profile customization.

### Feature 2: Skills & Academic Training Timeline
- Curates **five genuine technical skills** across Mobile, Programming, Hardware/IoT, and DevOps.
- Integrates a structured academic timeline with reusable `TimelineItem` components representing ongoing studies at INES-Ruhengeri and foundational scientific background.

### Feature 3: Genuine Project Portfolio
Presents two authenticated student projects with comprehensive problem statements, technical architecture, student contributions, and outcomes:
1. **RP2350 Dual-Core Sensor Gateway & Telemetry Unit:** Embedded IoT telemetry node on Waveshare RP2350 microcontroller with asymmetric dual-core multiprocessing and non-volatile flash logging.
2. **SWE 3513 Intelligent Clinical Risk Assessment Classifier:** Feature-scaled algorithmic screening pipeline with vectorized sigmoid activation and automated pull-request integration.

### Feature 4: Controlled Profile Editor with Field-Level Validation
Controlled form managing headline, biography, primary skill, and availability status with real-time feedback:
- **Rule 1 (Headline):** 5 to 70 characters.
- **Rule 2 (Biography):** 25 to 300 characters with live character counter.
- **Rule 3 (Primary Skill):** 2 to 40 characters, non-empty.
- **Save Guard:** Save button is disabled and blocked whenever validation errors are present.

### Feature 5: Native Navigation Structure
- 5-tab Bottom Navigation bar (Home, Skills, Projects, Profile, About).
- Nested Native Stack navigation for `ProjectDetails` with full parameter passing and reliable back navigation preserving list state.

### Feature 6: Camera & Gallery Media Workflow
- Image selection and capture powered by `expo-image-picker`.
- Supports live square preview, replacement from gallery, camera capture, and safe removal reverting to the default avatar.
- Handles user permission denial and selection cancellation with non-blocking feedback banners.

### Feature 7: Local Persistence with AsyncStorage
- Profile customizations and local image references are serialized to JSON and persisted under `@fcportfolio_profile_v1` using `@react-native-async-storage/async-storage`.
- State is automatically restored on cold application restart.
- Features a one-tap default reset option with confirmation dialogue.

### Feature 8: Autonomous Offline Behavior (Airplane Mode Ready)
- 100% of portfolio information, assets, wireframes, and documentation run offline.
- Optional external repository links are explicitly tagged with `(Requires Internet Connection)` and handle offline clicks gracefully.

### Feature 9: About & Verification Card
- Displays official verification card: App Name (`FCPortfolio`), Student Name (`Fajwan Chanjwok`), Registration Number (`25/28110`), and Verification Code (`MOB-A2-8110`).
- Features the required data-use and privacy statement confirming zero external telemetry.

### Feature 10: Standalone Android Release Packaging
- Configured with `eas.json` for standalone Android APK generation without Expo Go.

---

## 3. Setup and Run Commands

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli eas-cli`)

### Local Development Setup
```bash
# Clone the repository
git clone https://github.com/Hockmon69/MOB_A2_2528110.git
cd MOB_A2_2528110

# Install dependencies
npm install

# Start the Expo development server
npx expo start

# Run on connected Android device or emulator
npx expo run:android
```

---

## 4. Standalone EAS Build Command
To produce the standalone installable APK without Expo Go:
```bash
# Log in to your Expo account
eas login

# Configure project if running for the first time
eas build:configure

# Build standalone Android APK using the preview profile
eas build -p android --profile preview
```
The resulting `MOB_A2_2528110.apk` can be downloaded directly from the EAS dashboard and installed on any Android device via ADB or direct transfer.

---

## 5. Physical Device Release Verification
- **Tested Physical Device:** Google Pixel 8 (Physical Device) / Samsung Galaxy A54
- **Operating System Version:** Android 14 (API Level 34)
- **Offline / Airplane Mode Test:** Confirmed 100% operational in Airplane Mode (Wi-Fi OFF, Cellular OFF).
- **Final Commit Hash:** `e79d9830d16d45f1f1a7437ab108f9342b1649fe`
- **GitHub Repository URL:** https://github.com/Hockmon69/MOB_A2_2528110
- **GitHub Release URL:** https://github.com/Hockmon69/MOB_A2_2528110/releases/tag/FCportfolio
- **APK Download URL:** https://github.com/Hockmon69/MOB_A2_2528110/releases/download/FCportfolio/Fajwan.Chanjwok.portfolio.apk
  
## 6. Demonstration Video Checklist (2-Minute Limit)
The demonstration video `MOB_A2_2528110_DEMO.mp4` attached to Release `v1.0.0` shows in one continuous unedited sequence:
1. Handwritten card showing Name, Registration Number (`25/28110`), App Name (`FCPortfolio`), and Code (`MOB-A2-8110`).
2. The standalone APK launching directly from the Android home screen without Expo Go.
3. The “My name is Fajwan Chanjwok.” introduction, portfolio navigation, and project details.
4. Input validation error triggered on short headline (<5 chars), followed by valid save.
5. Swiping app from recent tasks, reopening, and verifying persisted data.
6. Verification card on About screen.
7. Airplane Mode status and device clock visible in the status bar.

---

## 7. Known Limitations
- External links to GitHub repositories require network connectivity and will display an offline notice when clicked in Airplane Mode.
- Profile photo selection is constrained to local device storage; cloud backup is intentionally omitted to maintain zero-network data privacy.
