import React, { useState, FormEvent } from "react";
import Form from "../ui/Form";
import { ParentInfo } from "@/interfaces/registration/registration";
import FormField from "@/components/ui/FormField";
import Input from "@/components/ui/Input";

interface ParentInfoProps {
  initialData?: Partial<ParentInfo>;
  onChange: (data: Partial<ParentInfo>) => void;
  onPrevious: () => void;
  onNext: () => void;
}

export default function Conditions({
  initialData = {},
  onChange,
  onPrevious,
  onNext,
}: ParentInfoProps) {
  const [parentInfo, setParentInfo] =
    useState<Partial<ParentInfo>>(initialData);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onChange(parentInfo);
    onNext();
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const updatedInfo = { ...parentInfo, [name]: value };
    setParentInfo(updatedInfo);
    onChange(updatedInfo);
  };

  return (
    <Form
      className="px-8 "
      onSubmit={handleSubmit}
      title="(ii) Conditions of Registration"
      step={5}
      totalSteps={5}
      showStepIndicator={true}
      showNavigation={true}
      nextButtonText="Next Step"
      onPrevious={onPrevious}
    >
      <div className="fee-policy p-6 mx-auto text-sm space-y-4">
        <ol className="list-[lower-roman] pl-6 space-y-5 marker:font-semibold">
          <li className="pl-2">
            Fees for Adhoc and Monthly services are payable upfront. Fees for
            monthly services are payable in advance, i.e., at the beginning of a
            new month. Failure to pay fees after the 1st day of each new month
            will lead to your child being suspended from the Pre-school.
          </li>

          <li className="pl-2">
            Failure to pay school fees within the required timeframe may result
            in the child&apos;s account being handed over for data collection. A
            15% debt collection fee adopted on the principal debt outstanding
            shall be levied on the child&apos;s account in addition to any other
            incidental legal costs.
          </li>

          <li className="pl-2">
            Registration fee must be paid upon new enrollment.
          </li>

          <li className="pl-2">
            Extra mural activities are paid for separately.
          </li>

          <li className="pl-2">
            Annual fee increases are applicable each year. Revised fees will be
            communicated in the re-registration letter for the ensuing year.
          </li>

          <li className="pl-2">
            Fees are payable irrespective of absenteeism, illness, or vacation.
          </li>

          <li className="pl-2">
            Two (2) calendar months notice in writing is required for the
            termination of services. The notice is only applicable from January
            to September each year.
          </li>

          <li className="pl-2">
            Parents are liable for the fees for the last three months of the
            academic calendar, i.e., from October to December.
          </li>

          <li className="pl-2">
            Regular payments for Adhoc and Monthly services should be effected
            into ChildSol bank account. All late collection fees should be paid
            in cash, without compromise, to the teacher on duty upon collecting
            your child.
          </li>

          <li className="pl-2">
            Fees are paid through Electronic Transfers (&quot;EFT&quot;) into
            ChildSol designated bank account. NO cash deposits are allowed. Cash
            deposits attract bank charges, and the Pre-school will debit the
            parent&apos;s account with any bank charges incurred as a result of
            a cash deposit.
          </li>

          <li className="pl-2">
            Fees are to be paid for 12 months from January to December each
            year.
          </li>

          <li className="pl-2">
            ChildSol is affiliated with TFN Credit Bureau, a registered credit
            bureau; all account payment profiles, patterns, and behaviors are
            recorded monthly with the credit bureau for purposes as per the
            National Credit Act No. 34 of 2005 (&quot;NCA&quot;). The parent
            hereby consents to ChildSol to:
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Contact, request, and obtain information from any credit
                provider or registered credit bureau to assess creditworthiness
              </li>
              <li>
                Provide payment behavior information to registered credit
                bureaus
              </li>
            </ul>
          </li>
        </ol>

        <div className="banking-details mt-6 p-4 bg-gray-50 rounded border border-gray-200">
          <h3 className="font-bold mb-2">Banking Details</h3>
          <p>
            <span className="font-medium">Bank:</span> Nedbank
          </p>
          <p>
            <span className="font-medium">Account No:</span> 1139301918
          </p>
          <p>
            <span className="font-medium">Branch Code:</span> 177942
          </p>
          <p className="mt-2 text-gray-600">
            ChildSol reserves the right to change banking details. Changes will
            be communicated to parents.
          </p>
        </div>

        <div className="curriculum-fee mt-6">
          <h3 className="font-bold">Curriculum Development Fee</h3>
          <p>
            R450 levied termly (January, May, September) to maintain our
            internationally-aligned curriculum framework and EYFS compliance.
          </p>
        </div>

        <div className="acknowledgement mt-6 p-4 bg-blue-50 rounded border border-blue-100">
          <p className="font-medium">
            I have read and understood these terms and authorize ChildSol to
            process my credit information for financial clearance purposes in
            compliance with the National Credit Act and POPIA.
          </p>
        </div>
      </div>

      <div className="max-w-md  mx-auto pt-22">
        <h1 className=" text-center pb-10 font-semibold max-w-lg">
          To accept the Declaration and Indemnity . Enter your Full Name,
          Surname and ID/Password Number
        </h1>
        <FormField className="" label="Full Name" required>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={parentInfo.motherFullName}
            onChange={handleInputChange}
            placeholder="Full Name"
          />
        </FormField>
        <FormField label="Surname" required>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={parentInfo.motherFullName}
            onChange={handleInputChange}
            placeholder="Surname"
          />
        </FormField>
        <FormField label="ID/Passport Number" required>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={parentInfo.motherFullName}
            onChange={handleInputChange}
            placeholder="ID/Passport Number"
          />
        </FormField>
      </div>
    </Form>
  );
}
