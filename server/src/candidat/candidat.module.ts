import { Module } from '@nestjs/common';
import { CandidatService } from './candidat.service';
import { CandidatController } from './candidat.controller';
import { FileService } from '@/libs/file/file.service';
import { CoursesModule } from './courses/courses.module';
import { EducationModule } from './education/education.module';
import { ExperienceModule } from './experience/experience.module';
import { HobbiesModule } from './hobbies/hobbies.module';
import { LanguagesModule } from './languages/languages.module';
import { SkillsModule } from './skills/skills.module';
import { CandidatLifeStateModule } from './candidat-life-state/candidat-life-state.module';
import { SocialModule } from './social/social.module';
import { SavedJobsModule } from './saved-jobs/saved-jobs.module';

@Module({
  controllers: [CandidatController],
  providers: [CandidatService, FileService],
  imports: [CoursesModule, EducationModule, ExperienceModule, HobbiesModule, LanguagesModule, SkillsModule, CandidatLifeStateModule, SocialModule, SavedJobsModule],
})
export class CandidatModule { }
