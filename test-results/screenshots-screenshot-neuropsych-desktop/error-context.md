# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: screenshots.spec.ts >> screenshot neuropsych
- Location: tests/screenshots.spec.ts:14:7

# Error details

```
Error: Channel closed
```

```
Error: page.screenshot: Test ended.
Call log:
  - taking page screenshot
  - waiting for fonts to load...

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - link "Skip to main content" [ref=e2] [cursor=pointer]:
    - /url: "#main"
    - text: Skip to content
  - navigation "Main navigation" [ref=e3]:
    - generic [ref=e5]:
      - link "CPS Home" [ref=e6] [cursor=pointer]:
        - /url: /
        - img [ref=e8]
        - generic [ref=e16]:
          - generic [ref=e17]: Comprehensive Psychological
          - generic [ref=e18]: Services — 40+ Years in Utah
      - generic [ref=e19]:
        - link "Services" [ref=e20] [cursor=pointer]:
          - /url: /services
        - link "Conditions" [ref=e21] [cursor=pointer]:
          - /url: /conditions
        - link "Locations" [ref=e22] [cursor=pointer]:
          - /url: /#locations
        - link "About" [ref=e23] [cursor=pointer]:
          - /url: /about
        - link "Team" [ref=e24] [cursor=pointer]:
          - /url: /team
        - link "Blog" [ref=e25] [cursor=pointer]:
          - /url: /blog
        - link "Resources" [ref=e26] [cursor=pointer]:
          - /url: /resources
        - link "Contact" [ref=e27] [cursor=pointer]:
          - /url: /#contact
      - link "Call us at (801) 483-1600" [ref=e29] [cursor=pointer]:
        - /url: tel:8014831600
        - img [ref=e30]
        - text: (801) 483-1600
  - main [ref=e32]:
    - navigation "Breadcrumb" [ref=e35]:
      - list [ref=e36]:
        - listitem [ref=e37]:
          - link "Home" [ref=e38] [cursor=pointer]:
            - /url: /
        - listitem [ref=e39]: /
        - listitem [ref=e40]: Neuropsychologist Near Me
    - generic [ref=e46]:
      - generic [ref=e47]:
        - heading "Find a Neuropsychologist Near You" [level=1] [ref=e48]
        - paragraph [ref=e49]: Comprehensive brain-behavior assessments by doctoral-level psychologists. Understand cognitive strengths, identify conditions, and get a clear path forward.
        - generic [ref=e50]:
          - link "Schedule a Neuropsychological Evaluation" [ref=e51] [cursor=pointer]:
            - /url: /#contact
            - img [ref=e52]
            - text: Schedule a Neuropsychological Evaluation
          - link "Call (801) 483-1600" [ref=e54] [cursor=pointer]:
            - /url: tel:8014831600
            - img [ref=e55]
            - text: (801) 483-1600
      - img "Cross-section anatomical model of the human brain — neuropsychological evaluation" [ref=e58]
    - generic [ref=e61]:
      - heading "Key Takeaways" [level=2] [ref=e63]
      - list [ref=e64]:
        - listitem [ref=e65]: Licensed doctoral-level psychologists with neuropsychological expertise
        - listitem [ref=e67]: Comprehensive brain-behavior assessments measuring memory, attention, processing speed, and executive function
        - listitem [ref=e69]: Three convenient Utah locations — Salt Lake City, Layton, and West Jordan
        - listitem [ref=e71]: Most major insurance plans accepted — self-pay options available
    - generic [ref=e75]:
      - generic [ref=e76]:
        - img [ref=e77]
        - text: Licensed Psychologists
      - generic [ref=e79]:
        - img [ref=e80]
        - text: Since 1986
      - generic [ref=e83]:
        - img [ref=e84]
        - text: Insurance Accepted
      - generic [ref=e87]:
        - img [ref=e88]
        - text: 3 Locations
    - generic [ref=e94]:
      - heading "About Neuropsychology" [level=2] [ref=e95]
      - generic [ref=e96]:
        - paragraph [ref=e97]: A neuropsychologist specializes in understanding the relationship between the brain and behavior. At Comprehensive Psychological Services, our doctoral-level psychologists administer standardized tests that measure memory, attention, language, problem-solving, and executive functioning (the mental processes that help you plan, focus, remember instructions, and juggle multiple tasks). This page is for individuals or families seeking a comprehensive neuropsychological evaluation in Utah.
        - paragraph [ref=e98]: Neuropsychological evaluations help diagnose conditions like ADHD, traumatic brain injury, dementia, learning disabilities, and neurodevelopmental disorders. Results guide treatment planning, academic accommodations, workplace modifications, and legal proceedings.
        - paragraph [ref=e99]: With three Utah locations and over 38 years of clinical experience, CPS provides evidence-based neuropsychological assessments for children, adolescents, and adults. Our Intensive Outpatient Program (IOP — a structured treatment program involving several hours of therapy per week) offers additional support for patients who need more than weekly therapy.
      - generic [ref=e101]:
        - img [ref=e103]
        - generic [ref=e111]:
          - paragraph [ref=e112]: About the Evaluator
          - paragraph [ref=e113]: Steven Szykula, Ph.D. — Licensed Psychologist
          - paragraph [ref=e114]: Dr. Szykula has been evaluating and treating behavioral health conditions in Utah since 1979. As the founder of Comprehensive Psychological Services, he has conducted thousands of neuropsychological, ADHD, autism, and custody evaluations. He has provided expert testimony in Utah family courts and is a member of the American Academy of Clinical Neuropsychology (AACN).
          - link "(801) 483-1600" [ref=e115] [cursor=pointer]:
            - /url: tel:8014831600
            - img [ref=e116]
            - text: (801) 483-1600
      - generic [ref=e118]:
        - heading "References & Resources" [level=3] [ref=e119]
        - list [ref=e120]:
          - listitem [ref=e121]:
            - link "1. American Academy of Clinical Neuropsychology (AACN). (2023). Practice standards for neuropsychological assessment." [ref=e122] [cursor=pointer]:
              - /url: https://www.aacn.org
          - listitem [ref=e123]:
            - link "2. International Neuropsychological Society (INS). (2023). About neuropsychology." [ref=e124] [cursor=pointer]:
              - /url: https://www.the-ins.org
          - listitem [ref=e125]:
            - link "3. National Institute of Neurological Disorders and Stroke. (2024). Neurological diagnostic tests and procedures." [ref=e126] [cursor=pointer]:
              - /url: https://www.ninds.nih.gov/health-information/patient-caregiver-education/neurological-diagnostic-tests-and-procedures
    - generic [ref=e128]:
      - generic [ref=e129]:
        - paragraph [ref=e130]: Ready to schedule a neuropsychology?
        - paragraph [ref=e131]: Insurance verification on your first call. Most patients scheduled within 1–2 weeks.
      - link "Call CPS at (801) 483-1600 to schedule Neuropsychology" [ref=e132] [cursor=pointer]:
        - /url: tel:8014831600
        - img [ref=e133]
        - text: (801) 483-1600
    - generic [ref=e136]:
      - heading "Neuropsychological Evaluation vs. Psychological Screening" [level=2] [ref=e137]
      - table [ref=e139]:
        - rowgroup [ref=e140]:
          - row "Feature Neuropsychological Evaluation Psychological Screening" [ref=e141]:
            - columnheader "Feature" [ref=e142]
            - columnheader "Neuropsychological Evaluation" [ref=e143]
            - columnheader "Psychological Screening" [ref=e144]
        - rowgroup [ref=e145]:
          - row "Duration 3–6 hours of testing 15–30 minutes" [ref=e146]:
            - rowheader "Duration" [ref=e147]
            - cell "3–6 hours of testing" [ref=e148]
            - cell "15–30 minutes" [ref=e149]
          - row "What it measures Memory, attention, language, executive function, IQ, processing speed Basic symptom checklist or questionnaire" [ref=e150]:
            - rowheader "What it measures" [ref=e151]
            - cell "Memory, attention, language, executive function, IQ, processing speed" [ref=e152]
            - cell "Basic symptom checklist or questionnaire" [ref=e153]
          - row "Administered by Doctoral-level psychologist Varies — physician, teacher, or self-report" [ref=e154]:
            - rowheader "Administered by" [ref=e155]
            - cell "Doctoral-level psychologist" [ref=e156]
            - cell "Varies — physician, teacher, or self-report" [ref=e157]
          - row "Output Comprehensive diagnostic report with recommendations Score indicating possible concern or referral" [ref=e158]:
            - rowheader "Output" [ref=e159]
            - cell "Comprehensive diagnostic report with recommendations" [ref=e160]
            - cell "Score indicating possible concern or referral" [ref=e161]
          - row "Diagnoses conditions Yes — provides formal diagnoses No — flags areas for further evaluation" [ref=e162]:
            - rowheader "Diagnoses conditions" [ref=e163]
            - cell "Yes — provides formal diagnoses" [ref=e164]
            - cell "No — flags areas for further evaluation" [ref=e165]
          - row "Best for Diagnosis, treatment planning, legal/academic documentation Initial triage or annual wellness check" [ref=e166]:
            - rowheader "Best for" [ref=e167]
            - cell "Diagnosis, treatment planning, legal/academic documentation" [ref=e168]
            - cell "Initial triage or annual wellness check" [ref=e169]
          - row "Insurance coverage Usually covered when medically necessary Often included in routine office visit" [ref=e170]:
            - rowheader "Insurance coverage" [ref=e171]
            - cell "Usually covered when medically necessary" [ref=e172]
            - cell "Often included in routine office visit" [ref=e173]
    - generic [ref=e176]:
      - heading "What to Expect" [level=2] [ref=e177]
      - generic [ref=e178]:
        - generic [ref=e179]:
          - generic [ref=e180]: "01"
          - paragraph [ref=e181]: Initial clinical interview to review your history, symptoms, and goals
        - generic [ref=e182]:
          - generic [ref=e183]: "02"
          - paragraph [ref=e184]: Standardized cognitive and neuropsychological test battery (typically 3–6 hours)
        - generic [ref=e185]:
          - generic [ref=e186]: "03"
          - paragraph [ref=e187]: Behavioral observations and symptom questionnaires
        - generic [ref=e188]:
          - generic [ref=e189]: "04"
          - paragraph [ref=e190]: Comprehensive written report with diagnosis and recommendations
        - generic [ref=e191]:
          - generic [ref=e192]: "05"
          - paragraph [ref=e193]: Feedback session to review findings and answer your questions
    - generic [ref=e196]:
      - heading "Why Choose CPS" [level=2] [ref=e197]
      - generic [ref=e198]:
        - generic [ref=e199]:
          - img [ref=e200]
          - generic [ref=e203]: Doctoral-level psychologists with specialized neuropsych training
        - generic [ref=e204]:
          - img [ref=e205]
          - generic [ref=e208]: Evidence-based test batteries tailored to your specific concerns
        - generic [ref=e209]:
          - img [ref=e210]
          - generic [ref=e213]: Detailed reports accepted by schools, courts, and medical providers
        - generic [ref=e214]:
          - img [ref=e215]
          - generic [ref=e218]: Three convenient Utah locations — SLC, Layton, West Jordan
        - generic [ref=e219]:
          - img [ref=e220]
          - generic [ref=e223]: Most major insurance plans accepted, plus self-pay options
    - generic [ref=e226]:
      - heading "Frequently Asked Questions" [level=2] [ref=e227]
      - generic [ref=e228]:
        - group [ref=e229]:
          - generic "How long does a neuropsychological evaluation take?" [ref=e230] [cursor=pointer]:
            - text: How long does a neuropsychological evaluation take?
            - img [ref=e231]
        - group [ref=e233]:
          - generic "Do I need a referral to see a neuropsychologist?" [ref=e234] [cursor=pointer]:
            - text: Do I need a referral to see a neuropsychologist?
            - img [ref=e235]
        - group [ref=e237]:
          - generic "What conditions can a neuropsychological evaluation diagnose?" [ref=e238] [cursor=pointer]:
            - text: What conditions can a neuropsychological evaluation diagnose?
            - img [ref=e239]
        - group [ref=e241]:
          - generic "Will insurance cover the evaluation?" [ref=e242] [cursor=pointer]:
            - text: Will insurance cover the evaluation?
            - img [ref=e243]
    - generic [ref=e246]:
      - heading "Related Conditions" [level=2] [ref=e247]
      - generic [ref=e248]:
        - link "Concussion & TBI Post-concussion symptoms don't always resolve on their own. A neuropsychological evaluation maps what's still off and what's recovering — so you can plan around the facts. Read the condition guide" [ref=e249] [cursor=pointer]:
          - /url: /conditions/concussion-tbi
          - heading "Concussion & TBI" [level=3] [ref=e250]
          - paragraph [ref=e251]: Post-concussion symptoms don't always resolve on their own. A neuropsychological evaluation maps what's still off and what's recovering — so you can plan around the facts.
          - generic [ref=e252]:
            - text: Read the condition guide
            - img [ref=e253]
        - link "Dementia & Memory Concerns Memory changes are scary — but 'is this normal aging, MCI, or dementia?' is a question we can actually answer. A neuropsychological evaluation gives the whole family something concrete to plan around. Read the condition guide" [ref=e255] [cursor=pointer]:
          - /url: /conditions/dementia-memory
          - heading "Dementia & Memory Concerns" [level=3] [ref=e256]
          - paragraph [ref=e257]: Memory changes are scary — but 'is this normal aging, MCI, or dementia?' is a question we can actually answer. A neuropsychological evaluation gives the whole family something concrete to plan around.
          - generic [ref=e258]:
            - text: Read the condition guide
            - img [ref=e259]
    - generic [ref=e263]:
      - heading "Related Services" [level=2] [ref=e264]
      - generic [ref=e265]:
        - link "ADHD Evaluation Near Me Get clear answers about attention, focus, and executive functioning with a thorough ADHD evaluation from experienced psy... Learn More" [ref=e266] [cursor=pointer]:
          - /url: /adhd-evaluation-near-me
          - heading "ADHD Evaluation Near Me" [level=3] [ref=e267]
          - paragraph [ref=e268]: Get clear answers about attention, focus, and executive functioning with a thorough ADHD evaluation from experienced psy...
          - generic [ref=e269]:
            - text: Learn More
            - img [ref=e270]
        - link "Cognitive Evaluation Near Me Understand your cognitive strengths and challenges with a thorough evaluation measuring IQ, memory, processing speed, an... Learn More" [ref=e272] [cursor=pointer]:
          - /url: /cognitive-evaluation-near-me
          - heading "Cognitive Evaluation Near Me" [level=3] [ref=e273]
          - paragraph [ref=e274]: Understand your cognitive strengths and challenges with a thorough evaluation measuring IQ, memory, processing speed, an...
          - generic [ref=e275]:
            - text: Learn More
            - img [ref=e276]
        - link "Autism Assessment Whether you're seeking answers for your child or yourself, our comprehensive autism assessment provides clarity, diagnos... Learn More" [ref=e278] [cursor=pointer]:
          - /url: /autism-assessment
          - heading "Autism Assessment" [level=3] [ref=e279]
          - paragraph [ref=e280]: Whether you're seeking answers for your child or yourself, our comprehensive autism assessment provides clarity, diagnos...
          - generic [ref=e281]:
            - text: Learn More
            - img [ref=e282]
    - generic [ref=e286]:
      - heading "Ready to Get Started?" [level=2] [ref=e287]
      - paragraph [ref=e288]: Schedule your neuropsychology at one of our three Utah locations. Call us today or book online.
      - generic [ref=e289]:
        - link "Schedule a Neuropsychological Evaluation" [ref=e290] [cursor=pointer]:
          - /url: /#contact
          - img [ref=e291]
          - text: Schedule a Neuropsychological Evaluation
        - link "Call (801) 483-1600" [ref=e293] [cursor=pointer]:
          - /url: tel:8014831600
          - img [ref=e294]
          - text: (801) 483-1600
    - paragraph [ref=e298]:
      - strong [ref=e299]: "Disclaimer:"
      - text: The information on this page is for educational purposes only and does not constitute medical advice, diagnosis, or treatment. The information provided reflects general descriptions of psychological services and is not a substitute for a professional evaluation. If you believe you or someone you know may benefit from these services, please contact CPS at
      - link "(801) 483-1600" [ref=e300] [cursor=pointer]:
        - /url: tel:8014831600
      - text: . For mental health emergencies, please call 988 (Suicide & Crisis Lifeline) or 911.
  - contentinfo "Site footer" [ref=e301]:
    - generic [ref=e302]:
      - generic [ref=e303]:
        - generic [ref=e304]:
          - generic [ref=e305]:
            - img [ref=e307]
            - generic [ref=e315]:
              - generic [ref=e316]: Comprehensive Psychological
              - generic [ref=e317]: Services — 40+ Years in Utah
          - paragraph [ref=e318]: Evidence-based behavioral health evaluations and treatment serving Utah for over 40 years.
        - generic [ref=e319]:
          - heading "Evaluations" [level=4] [ref=e320]
          - list [ref=e321]:
            - listitem [ref=e322]:
              - link "Neuropsychological Evaluations" [ref=e323] [cursor=pointer]:
                - /url: /neuropsychologist-near-me
            - listitem [ref=e324]:
              - link "ADHD Evaluation" [ref=e325] [cursor=pointer]:
                - /url: /adhd-evaluation-near-me
            - listitem [ref=e326]:
              - link "ADHD Diagnosis" [ref=e327] [cursor=pointer]:
                - /url: /adhd-diagnosis-near-me
            - listitem [ref=e328]:
              - link "ADHD Testing" [ref=e329] [cursor=pointer]:
                - /url: /adhd-testing
            - listitem [ref=e330]:
              - link "Autism Assessment" [ref=e331] [cursor=pointer]:
                - /url: /autism-assessment
            - listitem [ref=e332]:
              - link "ADOS-2 Testing" [ref=e333] [cursor=pointer]:
                - /url: /ados-2-testing-near-me
            - listitem [ref=e334]:
              - link "Cognitive Evaluation" [ref=e335] [cursor=pointer]:
                - /url: /cognitive-evaluation-near-me
            - listitem [ref=e336]:
              - link "Custody Evaluation" [ref=e337] [cursor=pointer]:
                - /url: /custody-evaluator-near-me
        - generic [ref=e338]:
          - heading "Treatment" [level=4] [ref=e339]
          - list [ref=e340]:
            - listitem [ref=e341]:
              - link "Ketamine Therapy" [ref=e342] [cursor=pointer]:
                - /url: /ketamine-depression-treatment-near-me
            - listitem [ref=e343]:
              - link "Spravato (Esketamine)" [ref=e344] [cursor=pointer]:
                - /url: /spravato-esketamine-therapy
            - listitem [ref=e345]:
              - link "Intensive Outpatient (IOP)" [ref=e346] [cursor=pointer]:
                - /url: /intensive-outpatient-program-iop
            - listitem [ref=e347]:
              - link "Counseling & Psychotherapy" [ref=e348] [cursor=pointer]:
                - /url: /counseling-and-psychotherapy
            - listitem [ref=e349]:
              - link "Medication Management" [ref=e350] [cursor=pointer]:
                - /url: /medication-management
            - listitem [ref=e351]:
              - link "Neurofeedback" [ref=e352] [cursor=pointer]:
                - /url: /neurofeedback-therapy
            - listitem [ref=e353]:
              - link "Telehealth" [ref=e354] [cursor=pointer]:
                - /url: /telehealth-therapy
          - heading "Conditions" [level=4] [ref=e355]
          - list [ref=e356]:
            - listitem [ref=e357]:
              - link "Adult ADHD" [ref=e358] [cursor=pointer]:
                - /url: /conditions/adhd-in-adults
            - listitem [ref=e359]:
              - link "Adult Autism" [ref=e360] [cursor=pointer]:
                - /url: /conditions/autism-in-adults
            - listitem [ref=e361]:
              - link "Concussion & TBI" [ref=e362] [cursor=pointer]:
                - /url: /conditions/concussion-tbi
            - listitem [ref=e363]:
              - link "Dementia & Memory" [ref=e364] [cursor=pointer]:
                - /url: /conditions/dementia-memory
            - listitem [ref=e365]:
              - link "Learning Disability" [ref=e366] [cursor=pointer]:
                - /url: /conditions/learning-disability
            - listitem [ref=e367]:
              - link "Treatment-Resistant Depression" [ref=e368] [cursor=pointer]:
                - /url: /conditions/treatment-resistant-depression
          - heading "Resources" [level=4] [ref=e369]
          - list [ref=e370]:
            - listitem [ref=e371]:
              - link "Forms & Documents" [ref=e372] [cursor=pointer]:
                - /url: /resources#forms
            - listitem [ref=e373]:
              - link "Insurance & Billing" [ref=e374] [cursor=pointer]:
                - /url: /resources#insurance
            - listitem [ref=e375]:
              - link "FAQs" [ref=e376] [cursor=pointer]:
                - /url: /resources#faq
            - listitem [ref=e377]:
              - link "Patient Rights" [ref=e378] [cursor=pointer]:
                - /url: /resources#patient-rights
            - listitem [ref=e379]:
              - link "Newsletter" [ref=e380] [cursor=pointer]:
                - /url: /newsletter
            - listitem [ref=e381]:
              - link "Blog" [ref=e382] [cursor=pointer]:
                - /url: /blog
        - generic [ref=e383]:
          - heading "For Your Role" [level=4] [ref=e384]
          - list [ref=e385]:
            - listitem [ref=e386]:
              - link "Parents & Caregivers" [ref=e387] [cursor=pointer]:
                - /url: /for/parents
            - listitem [ref=e388]:
              - link "For Attorneys" [ref=e389] [cursor=pointer]:
                - /url: /for/attorneys
                - text: Attorneys
            - listitem [ref=e390]:
              - link "For Schools & Educators" [ref=e391] [cursor=pointer]:
                - /url: /for/schools
                - text: Schools & Educators
            - listitem [ref=e392]:
              - link "For Employers & HR" [ref=e393] [cursor=pointer]:
                - /url: /for/employers
                - text: Employers & HR
            - listitem [ref=e394]:
              - link "For Primary-Care Referrers" [ref=e395] [cursor=pointer]:
                - /url: /for/referrers
                - text: Primary-Care Referrers
          - heading "Legal & Compliance" [level=4] [ref=e396]
          - list [ref=e397]:
            - listitem [ref=e398]:
              - link "Privacy Policy" [ref=e399] [cursor=pointer]:
                - /url: /privacy
            - listitem [ref=e400]:
              - link "HIPAA Notice" [ref=e401] [cursor=pointer]:
                - /url: /hipaa
                - text: HIPAA Notice of Privacy Practices
          - heading "Contact" [level=4] [ref=e402]
          - list [ref=e403]:
            - listitem [ref=e404]:
              - link "Call CPS at (801) 483-1600" [ref=e405] [cursor=pointer]:
                - /url: tel:8014831600
                - img [ref=e406]
                - text: (801) 483-1600
            - listitem [ref=e408]:
              - link "Email CPS at cps@wecanhelpout.com" [ref=e409] [cursor=pointer]:
                - /url: mailto:cps@wecanhelpout.com
                - img [ref=e410]
                - text: cps@wecanhelpout.com
            - listitem "Our office addresses" [ref=e413]:
              - img [ref=e414]
              - generic [ref=e417]:
                - generic [ref=e418]: 1208 E 3300 S, SLC, UT 84106
                - generic [ref=e419]: "1916 N 700 W #190, Layton, UT 84041"
                - generic [ref=e420]: "9069 S 1300 W #D, W. Jordan, UT 84088"
      - generic [ref=e421]:
        - generic [ref=e422]:
          - paragraph [ref=e423]: © 2026 Comprehensive Psychological Services. All rights reserved.
          - generic [ref=e424]:
            - link "Privacy Policy" [ref=e425] [cursor=pointer]:
              - /url: /privacy
            - link "HIPAA Notice" [ref=e426] [cursor=pointer]:
              - /url: /hipaa
        - paragraph [ref=e427]: Salt Lake City • Layton • West Jordan
        - paragraph [ref=e428]: This website does not provide medical advice. The information on this site is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or qualified mental health provider with any questions you may have regarding a medical or mental health condition.
  - link "Sponsor Fred — Live with the Host · Tap in to Fred's circle. Compound the days. Open →" [ref=e430] [cursor=pointer]:
    - /url: https://circlern.com/host/eef969fc-01ae-4af5-95af-ad0f104488cc?utm_source=omni-sponsor&utm_medium=embed&utm_campaign=fred-circle&ref=cps
    - generic [ref=e432]:
      - generic [ref=e433]: Sponsor
      - generic [ref=e434]: Fred — Live with the Host
      - generic [ref=e435]: ·
      - generic [ref=e436]: Tap in to Fred's circle. Compound the days.
    - generic [ref=e437]: Open →
```

# Test source

```ts
  1  | import { test } from "@playwright/test";
  2  | import path from "path";
  3  | 
  4  | const pages = [
  5  |   { name: "home", url: "/" },
  6  |   { name: "neuropsych", url: "/neuropsychologist-near-me" },
  7  |   { name: "adhd", url: "/adhd-evaluation-near-me" },
  8  |   { name: "autism", url: "/autism-assessment" },
  9  |   { name: "custody", url: "/custody-evaluator-near-me" },
  10 |   { name: "ketamine", url: "/ketamine-depression-treatment-near-me" },
  11 | ];
  12 | 
  13 | for (const page of pages) {
  14 |   test(`screenshot ${page.name}`, async ({ page: pw, viewport }) => {
  15 |     await pw.goto(page.url, { waitUntil: "load", timeout: 45000 });
  16 |     const width = viewport?.width ?? 1440;
  17 |     const outDir = path.join(process.cwd(), "screenshots");
> 18 |     await pw.screenshot({
     |              ^ Error: page.screenshot: Test ended.
  19 |       path: path.join(outDir, `${page.name}-${width}.png`),
  20 |       fullPage: true,
  21 |     });
  22 |   });
  23 | }
  24 | 
```