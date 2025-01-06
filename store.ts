import {create} from 'zustand';

export interface HealthConcern {
  id: number;
  name: string;
  priotity: number;
}

export interface Allergy {
  id: number;
  name: string;
}

interface AppState {
  health_concerns: HealthConcern[];
  diets: string[];
  is_daily_exposure: boolean;
  is_somke: boolean;
  alchol: string;
  allergies: Allergy[];
  addHealthConcern: (obj: HealthConcern) => void;
  addDiet: (value: string) => void;
  toggleDailyExposure: () => void;
  toggleSmoke: () => void;
  setAlchol: (value: string) => void;
  addAllergy: (obj: Allergy) => void;
}

const useAppStore = create<AppState>(set => ({
  health_concerns: [],
  diets: [],
  is_daily_exposure: false,
  is_somke: false,
  alchol: '0-1',
  allergies: [],
  addHealthConcern: (obj: HealthConcern) =>
    set((state: AppState) => ({
      health_concerns: [...state.health_concerns, obj],
    })),
  addDiet: (value: string) =>
    set((state: AppState) => ({diets: [...state.diets, value]})),
  toggleDailyExposure: () =>
    set((state: AppState) => ({
      is_daily_exposure: !state.is_daily_exposure,
    })),
  toggleSmoke: () =>
    set((state: AppState) => ({
      is_somke: !state.is_somke,
    })),
  setAlchol: (value: string) => set(() => ({alchol: value})),
  addAllergy: (obj: Allergy) =>
    set((state: AppState) => ({allergies: [...state.allergies, obj]})),
}));

export default useAppStore;
